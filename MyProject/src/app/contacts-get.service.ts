import { Injectable, Inject } from '@angular/core';
import { Contact } from './contact/contact';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsGetService {

  constructor( private httpclient: HttpClient) { }

  getContacts():  Observable<Contact[]> {
    return (this.httpclient.get<Contact[]>("http://localhost:3000/Contacts"));
  }

  getContact(id: string): Observable<Contact> {
    return (this.httpclient.get<Contact>("http://localhost:3000/Contacts/" + id));
  }
}
