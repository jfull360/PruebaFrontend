import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaInputComponent } from './prueba-input/prueba-input.component';
import { PruebaSelectComponent } from './prueba-select/prueba-select.component';
import { PruebaCardComponent } from './prueba-card/prueba-card.component';
import { PruebaButtonComponent } from './prueba-button/prueba-button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { PruebaInputTextComponent } from './prueba-input-text/prueba-input-text.component';
const COMPONENTS = [
  PruebaInputComponent,
  PruebaSelectComponent,
  PruebaCardComponent,
  PruebaButtonComponent,
  PruebaInputTextComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    PruebaInputTextComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    InputNumberModule,
    InputTextModule,
    InputMaskModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SharedModule { }
