import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    private isOpen = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('document:click', ['$event.target'])
    onClick(targetElement: any) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.closeDropdown();
        }
    }

    @HostListener('click')
    toggleDropdown() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.openDropdown();
        } else {
            this.closeDropdown();
        }
    }

    private openDropdown() {
        this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }

    private closeDropdown() {
        this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
}
