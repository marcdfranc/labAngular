import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appHighllight]'
})
export class HighllightDirective {
	@Input() defaultColor = 'white';
	@Input('appHighllight') highliteColor = 'yellow';

  	@HostListener('mouseenter') onmouseover() {
		this.backgroundColor = this.highliteColor;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.backgroundColor = this.defaultColor;
	}

	@HostBinding('style.backgroundColor') backgroundColor: string;
	

	constructor(private elementRef: ElementRef, private renderer: Renderer) { }

	ngOnInit() {
		this.backgroundColor = this.defaultColor;		
	}

}
