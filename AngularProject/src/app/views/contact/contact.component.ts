import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/modelos/contacto';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public submitted = false;
  public contact: Contact;

  userEmail = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  constructor() {
    this.contact = new Contact();
  }

  ngOnInit(): void {
  }

  get tEmail(){
    return this.userEmail.get('email');
  }

  submit() {
    this.submitted = true;
    console.log(this.contact.name + ", " + this.contact.email + ", " + this.contact.text);
  }

}
