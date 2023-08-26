import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: 'button[appFundoAmarelo]'
})
export class FundoAmareloDirective {

	constructor(private elementRef: ElementRef, private renderer: Renderer) {
		//console.log(this.elementRef);
		
		// evitar usar assim, não é seguro
		//this.elementRef.nativeElement.style.backgroundColor = 'yellow';
		
		// modo correto
		this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
	}

}
