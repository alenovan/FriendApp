import { Contact } from './../contact';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted = false;
  contacts: Array<Contact>;

  constructor(private formBuilder: FormBuilder) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      pesan: ['', Validators.required]
    });
  }

  get formControls() { return this.contactForm.controls; }

  addContact(username, email, pesan) {
    let contactData = new Contact(username, email, pesan);
    this.contacts.push(contactData);
  }

  getFormValue(){
    this.isSubmitted = true;
    let username = this.contactForm.controls.username.value;
    let email = this.contactForm.controls.email.value;
    let pesan = this.contactForm.controls.pesan.value;
    this.addContact(username, email, pesan);
    if (this.contactForm.invalid) {
      return;
    }
  }

}
