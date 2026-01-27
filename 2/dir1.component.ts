import { Component } from '@angular/core';
import { BackcolorDirective } from '../backcolor.directive';

@Component({
  selector: 'app-dir1',
  standalone: true,
  imports: [BackcolorDirective],
  templateUrl: './dir1.component.html',
  styleUrl: './dir1.component.css'
})
export class Dir1Component {

}
