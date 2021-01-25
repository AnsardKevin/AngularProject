import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ContactComponent,

  ],
  exports: [
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
})
export class ContactModule { }