// import { Component, EventEmitter, Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  constructor() {}

  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  //   // console.log('onselect fired with  feature: ' + feature);
  // }
}
