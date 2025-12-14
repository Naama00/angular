import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgStyle, NgForOf } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgStyle, NgForOf],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'] 
})
export class ChildComponent {
  @Input() products: any;
   @Input() newPrices: any;
@Output() calcTime=new EventEmitter<any>;
second = 0;

  start() {
    setInterval(() => { this.second++ }, 1000);

  }

  end() {
      this.calcTime.emit(this.second);
  }

get roundedSeconds(): number {
    return Math.round(this.second);
}

}