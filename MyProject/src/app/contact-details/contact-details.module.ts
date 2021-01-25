import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactDetailsComponent } from './contact-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyContact, Contacts } from '../contact/mock_contacts';

@NgModule({
  declarations: [
    ContactDetailsComponent
  ],
  exports: [
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: MyContact, useValue: Contacts }]
})
export class ContactDetailModule { }