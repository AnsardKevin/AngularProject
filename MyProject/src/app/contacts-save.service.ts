import { Injectable, Inject } from '@angular/core';
import { Contact } from './contact/contact';
import { MyContact } from './contact/mock_contacts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsSaveService {

  constructor(@Inject(MyContact) private cont: Contact[], private httpclient: HttpClient) { }

  save(newcon:Contact, con: Contact): Observable<Contact> {
    // const param = new HttpParams()
    // .set('id', newcon.id ? newcon.id : '');
    return this.httpclient.put<Contact>("http://localhost:3000/Contacts/" + con.id , newcon);
  }

  add(newcon:Contact): Observable<Contact>{
    return this.httpclient.post<Contact>("http://localhost:3000/Contacts", newcon);
  }

  supp(id: string): Observable<Contact> {
    return this.httpclient.delete<Contact>("http://localhost:3000/Contacts/" + id);
  }
}
