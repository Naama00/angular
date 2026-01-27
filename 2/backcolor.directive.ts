import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appBackcolor]',
  standalone: true
})
export class BackcolorDirective  implements OnInit{

  @Input() colorSelected:string='yellow';
  constructor( private el:ElementRef, private render:Renderer2 ) {

   }

   ngOnInit(): void {
     this.render.setStyle(this.el.nativeElement, 'background-color', this.colorSelected)
   }

   @HostListener('mouseover') onMouseOver(){
    this.render.setStyle(this.el.nativeElement, 'background-color', 'aqua');
    this.render.setStyle(this.el.nativeElement, 'color', 'green');
    this.render.setStyle(this.el.nativeElement, 'font-size', 'x-large');
    
   }

   @HostListener('mouseleave') onLeave(){
    this.render.removeStyle(this.el.nativeElement, 'background-color');
    this.render.setStyle(this.el.nativeElement, 'font-size', 'medium');

   }

   @HostListener('click') onclick(){
    const icon = this.render.createElement('span');
    const iconText = this.render.createText('⭐');
    this.render.appendChild(icon, iconText);
    this.render.insertBefore(this.el.nativeElement, icon, this.el.nativeElement);

   }





}
