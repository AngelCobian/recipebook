import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = this.isOpen;
  }
  constructor() { }
  // add 'open' class to element this sit
  // when clicked
  // remove the class when click again

}
