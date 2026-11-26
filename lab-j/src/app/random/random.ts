import { Component, Input } from '@angular/core';
import { Random as RandomService } from '../random';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  @Input() max: number = 10;
  myNumber?: number;

  constructor(private randomService: RandomService) {}

  btnClick(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  // Lower half: number < 0.5 * max
  isSmallerThanHalf(): boolean {
    return this.myNumber !== undefined && this.myNumber < 0.5 * this.max;
  }
}
