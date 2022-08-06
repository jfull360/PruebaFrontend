import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputNumberModule } from 'primeng/inputnumber';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './Componentes/componentes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    SharedModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
