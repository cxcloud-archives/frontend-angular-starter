import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

const DECLARATIONS = [HeaderComponent, FooterComponent];
@NgModule({
  imports: [CommonModule],
  exports: [...DECLARATIONS],
  declarations: [...DECLARATIONS],
  providers: []
})
export class LayoutModule {}
