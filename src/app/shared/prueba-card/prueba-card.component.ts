import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prueba-card',
  templateUrl: './prueba-card.component.html',
  styleUrls: ['./prueba-card.component.css']
})
export class PruebaCardComponent  {

  @Input() title = '';
  @Input() subtitle = '';
  @Input() size:boolean=true;
}
