import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { StudentService } from '../services/student.service';

@Directive({
  selector: '[appMarkAbsent]',
})
export class MarkAbsentDirective {
  absent: boolean = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private studentService: StudentService
  ) {}

  @HostListener('click') markAbsent() {
    this.absent = !this.absent;

    if (this.absent) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'btn-dark');
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'red'
      );
    } else {
      this.renderer.removeStyle(
        this.elementRef.nativeElement,
        'background-color'
      );
      this.renderer.addClass(this.elementRef.nativeElement, 'btn-dark');
    }
  }
}
