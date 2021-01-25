import { Component, OnInit, Input, Inject } from '@angular/core';
import { Contact } from '../contact/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsGetService } from '../contacts-get.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsSaveService } from '../contacts-save.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  _contact: Contact = <Contact>{};
  profileForm;

  getContact(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.service.getContact(id.toString()).subscribe(contacts => {
      this._contact = contacts
      this.profileForm.setValue(this._contact);
      console.warn(this._contact);
    });
  }

  constructor(private route: ActivatedRoute, private service: ContactsGetService, private service_save: ContactsSaveService) { }

  ngOnInit() {
      this.profileForm  = new FormGroup({
        lastname: new FormControl(this._contact.lastname, [
          Validators.required,
        ]),
        firstname: new FormControl(this._contact.firstname, [
          Validators.required,
        ]),
        id: new FormControl(this._contact.id, [
          Validators.required,
        ]),
        email: new FormControl(this._contact.email, [
          Validators.required,
        ]),
        phone_number: new FormControl(this._contact.phone_number, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        naissance: new FormControl(this._contact.naissance),
        img: new FormControl('')
    });
    
    this.getContact();
  }

 

  onSubmit() {
    this.service_save.save(this.profileForm.value, this._contact).subscribe();
    location.reload();
  }
}
