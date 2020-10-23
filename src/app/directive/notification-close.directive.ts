import { ThrowStmt } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNotificationClose]',
})
export class NotificationCloseDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('click') mouseClick() {
    const parent = this.renderer.parentNode(this.elementRef.nativeElement);
    this.renderer.setProperty(parent, 'hidden', 'true');
  }
}
