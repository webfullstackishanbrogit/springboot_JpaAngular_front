import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private el:ElementRef) {

    el.nativeElement.style.color = 'red';
   }

  @HostListener('mouseenter')setColorMouseEnter(){//HostListener use for mouse events
    //this.el.nativeElement.style.color = 'yellow';
    this.SetColor("yellow");
  }


  @HostListener('mouseleave')setColorMouseLeave(){
    //this.el.nativeElement.style.color = 'green';
    this.SetColor("green");
  }


  private SetColor(color:String){//use common function
    this.el.nativeElement.style.color = color;
  }
}
