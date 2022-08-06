import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'IngresoInformacion',
    loadChildren: () => import('./Componentes/ingreso-informacion/ingreso-informacion.module').then(m => m.IngresoInformacionModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./Componentes/resumen/resumen.module').then(m => m.ResumenModule)
  },
  {
    path: '**',
    redirectTo: 'IngresoInformacion'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
