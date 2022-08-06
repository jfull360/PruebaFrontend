import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prueba-button',
  templateUrl: './prueba-button.component.html',
  styleUrls: ['./prueba-button.component.css']
})
export class PruebaButtonComponent  {

  @Input() label = '';
  @Input() type = '';
  @Input() icon: string | null = null;
  @Input() isDisable : boolean = false;

}
