import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'creator'
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): any {
    return value == Creator.DC? 'DC':'Marvel';
    
  }
}
