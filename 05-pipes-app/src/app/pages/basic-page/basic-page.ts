import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { avaliableLocal, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  localeService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('fernando');
  nameUpper = signal("FERNANDO");
  fullName = signal("FeRnaNdO HerrERA");

  customDate = signal(new Date());

  tickingEffect = effect((onCleanUp)=>{
    const interval = setInterval(()=>{
      this.customDate.set(new Date());
    },1000);

    onCleanUp(()=>{
      clearInterval(interval);
    })
  })
  changeLocal(Locale:avaliableLocal){
    this.localeService.changeLocal(Locale);
  }
}
