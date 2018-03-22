import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const DECLARATIONS = [];

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: []
})
export class SharedModule {}
