import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor='RED';

   }

    

}
