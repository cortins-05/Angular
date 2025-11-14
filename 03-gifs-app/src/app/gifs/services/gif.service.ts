import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GyphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const loadFromLocalStorage= ()=>{
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}


@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  trendingGifGroup = computed(()=>{
    const groups = [];
    for(let i=0;i<this.trendingGifs().length;i+=3){
      groups.push(this.trendingGifs().slice(i,i+3));
    }
    return groups;
  })

  searchLoading = signal(true);
  searchedGifs = signal<Gif[]>([]);

  searchHistory = signal<Record<string,Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(()=>Object.keys(this.searchHistory()));

  constructor(){
    this.loadTrendigGifs();
  }

  safeGifsToLocalStorage = effect(()=>{
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs',historyString);
  })

  loadTrendigGifs(){
    if(this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true);
    this.http.get<GyphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params: {
        api_key: environment.giphyApiKey,
        limit:21,
        offset: this.trendingPage()*21
      }
    }).subscribe( (resp)=>{
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingPage.update((current)=>current+=1);
      this.trendingGifs.update((currentGifs)=>[
        ...currentGifs,
        ...gifs
      ]);
      this.trendingGifsLoading.set(false);
      console.log({gifs});
    } )
  }

  searchGifs(query:string){
    return this.http.get<GyphyResponse>(`${environment.giphyUrl}/gifs/search`,{
      params:{
        api_key: environment.giphyApiKey,
        q: query,
        limit: 20
      }
    }).pipe(
      map(({data})=>data),
      map((items)=>GifMapper.mapGiphyItemsToGifArray(items)),
      tap(items => {
        this.searchHistory.update(history=>({
          ...history,
          [query.toLocaleLowerCase()]:items
        }))
      })
    )
  }

  getHistoryGifs(query:string){
    return this.searchHistory()[query] ?? [];
  }

}
