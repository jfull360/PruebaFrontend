import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'prueba-select',
  templateUrl: './prueba-select.component.html',
  styleUrls: ['./prueba-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PruebaSelectComponent),
    multi: true
  }]
})
export class PruebaSelectComponent  {

  @Input() label = '';
  @Input() options: any = [];

  value: any;
  onChange!: (_: any) => { };
  onTouch!: () => {};
  disabled!: boolean;

  writeValue(obj: any): void {
    if (obj) {this.value = obj}
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
