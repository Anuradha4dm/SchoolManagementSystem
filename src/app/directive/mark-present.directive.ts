import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { StudentService } from '../services/student.service';

@Directive({
  selector: '[appMarkPresent]',
})
export class MarkPresentDirective {
  initClick: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('click') changebakground() {
    this.initClick = !this.initClick;
    if (this.initClick) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'btn-dark');
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'green'
      );
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'btn-dark');
      this.renderer.removeStyle(
        this.elementRef.nativeElement,
        'background-color'
      );
    }
  }
}
