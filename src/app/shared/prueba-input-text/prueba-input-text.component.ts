import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-prueba-input-text',
  templateUrl: './prueba-input-text.component.html',
  styleUrls: ['./prueba-input-text.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PruebaInputTextComponent),
    multi: true
  }]
})
export class PruebaInputTextComponent {


  @Input() label:string = "";
  @Input() placeholder:string = "";
  @Input() readonly!:boolean;
  @Input() type:string="";

  constructor() { }


  value: any;

  onChange!: (x: any) => { };
  onTouch!: () => {};

  writeValue(obj: any): void {
    if (obj) {this.value = obj}
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }



}
