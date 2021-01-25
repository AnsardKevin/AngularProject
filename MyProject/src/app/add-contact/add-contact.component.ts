import { Component, OnInit } from '@angular/core';
import { ContactsSaveService } from '../contacts-save.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  profileForm;

  constructor(private service_save: ContactsSaveService) { }

  ngOnInit() {
    this.profileForm  = new FormGroup({
      lastname: new FormControl("", [
        Validators.required,
      ]),
      firstname: new FormControl("", [
        Validators.required,
      ]),
      id: new FormControl("", [
        Validators.required,
      ]),
      email: new FormControl("", [
        Validators.required,
      ]),
      phone_number: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      naissance: new FormControl(""),
      img: new FormControl('')
  });
  }

  onSubmit() {
    this.service_save.add(this.profileForm.value).subscribe();
    console.log(this.profileForm.value);
  }

}
