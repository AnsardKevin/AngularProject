import { Component, OnInit, Inject } from '@angular/core';
import { Contact } from './contact';
import { ContactsGetService } from '../contacts-get.service';
import { MyContact } from './mock_contacts';
import { ContactsSaveService } from '../contacts-save.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit { 

  contacts: Contact[] = [];

  getContacts() {
    this.service.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  suppContact(contact: Contact) {
    this.servicesave.supp(contact.id).subscribe();
    location.reload();
  }

  constructor(private service: ContactsGetService, private servicesave: ContactsSaveService) {
  }

  ngOnInit() {
    this.getContacts();
  }

}
