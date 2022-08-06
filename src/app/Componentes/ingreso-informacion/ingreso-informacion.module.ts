import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IngresoInformacionComponent } from './ingreso-informacion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { pipe } from 'rxjs';
import { PipesModule } from 'src/app/pipes/pipes.module';

const ROUTES: Routes = [
  { path: '', component: IngresoInformacionComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    IngresoInformacionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    SharedModule,
    PipesModule
  ],
  exports: [
    IngresoInformacionComponent
  ],
})
export class IngresoInformacionModule { }
