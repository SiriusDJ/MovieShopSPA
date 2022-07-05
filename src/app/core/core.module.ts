import { FooterComponent } from './layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // if you wanna use a component outside its own module in another module, then that module should export that component
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
