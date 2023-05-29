import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.group') isOpen = false;
    @HostListener('click') toggleOpenn() {
        this.isOpen = !this.isOpen
    }



}
