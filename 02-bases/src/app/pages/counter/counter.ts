import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent{
  counter = 15;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.increaseBy(1);
      console.log('Tick');
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += 1;
    this.counterSignal.update((current) => current + value);
  }
  decreaseBy(value: number) {
    this.counter -= 1;
    this.counterSignal.update((current) => current - value);
  }
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
