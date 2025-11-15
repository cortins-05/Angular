import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class toggleCase implements PipeTransform {
  transform(value: string,upper:boolean=true): string {
    if(upper){
      return value.toUpperCase();
    }else{
      return value.toLowerCase();
    }
  }
}
