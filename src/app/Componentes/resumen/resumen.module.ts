import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { ResumenComponent } from './resumen.component';
import { SharedModule } from 'src/app/shared/shared.module';

const ROUTES: Routes = [
  {path: '', component: ResumenComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ResumenComponent
  ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(ROUTES),
      FormsModule,
      SharedModule
    ],
    exports: [
        ResumenComponent
    ],
})
export class ResumenModule {}
