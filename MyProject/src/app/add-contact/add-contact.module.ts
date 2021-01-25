import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AddContactComponent } from './add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
      AddContactComponent,
  ],
  exports: [
      AddContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AddContactModule { }