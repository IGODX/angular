import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BilGatesComponent } from './bil-gates/bil-gates.component';
import { CarPhotoComponent } from './car-photo/car-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    BilGatesComponent,
    CarPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
