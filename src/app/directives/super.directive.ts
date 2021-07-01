import { Directive, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[ambSuper]'
})
export class SuperDirective implements OnInit {

  @Input() ambSuper: {
    index: number;
    color: string;
  } = { index: 0, color: 'white' }

  @ViewChild('productTitle') titleRef: ElementRef | undefined

  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    if (this.ambSuper.index % 2 == 0) {
      this.el.nativeElement.style.backgroundColor = this.ambSuper.color
    }
  }

  @HostListener('mouseover')
  handleMouseover() {
    if (this.titleRef) {
      this.titleRef.nativeElement.style.color = 'gold'
    }
  }
 
}
