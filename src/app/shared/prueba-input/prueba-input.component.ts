import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'prueba-input',
  templateUrl: './prueba-input.component.html',
  styleUrls: ['./prueba-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PruebaInputComponent),
    multi: true
  }]
})
export class PruebaInputComponent  {

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
