import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IngresoInformacionComponent } from './ingreso-informacion/ingreso-informacion.component';
import { ResumenComponent } from './resumen/resumen.component';
import { IngresoInformacionModule } from './ingreso-informacion/ingreso-informacion.module';
import { ResumenModule } from './resumen/resumen.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IngresoInformacionModule,
    ResumenModule,
    SharedModule,
    PipesModule
  ],
  exports: [
  ]
})
export class ComponentesModule {}
