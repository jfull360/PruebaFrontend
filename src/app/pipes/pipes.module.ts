import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { separadorcomas } from './comas.pipe';

@NgModule({
  declarations: [
    separadorcomas
  ],
  imports: [CommonModule],
  exports: [
    separadorcomas
  ],
})
export class PipesModule {}
