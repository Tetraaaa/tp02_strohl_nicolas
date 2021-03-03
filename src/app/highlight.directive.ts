import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input("appHighlight") valid: boolean = false;
  constructor(private ref:ElementRef) {
  }

  ngAfterViewInit(): void {
    if(!this.valid) {
      this.ref.nativeElement.style = "border:1px solid red";
    }
  }

}
