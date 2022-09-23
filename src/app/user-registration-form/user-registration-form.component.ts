import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  userName = new FormControl('', [Validators.required]);
  fullName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  company = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  
  constructor(public activeModal: NgbActiveModal, public formBuilder: FormBuilder, public _MainService: MainService) { }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  submit(){
    let _data = {
      username: this.userName.getRawValue(),
      name: this.fullName.getRawValue(),
      email: this.email.getRawValue(),
      company: {
        name: this.company.getRawValue()
      },
      address: {
        city: this.address.getRawValue()
      }
    }
    let stored = JSON.parse(localStorage.getItem("users") || '{}');
    stored.push(_data);
    localStorage.setItem("users", JSON.stringify(stored));
    this.activeModal.close(JSON.parse(localStorage.getItem("users") || '{}'));
  } 

  public cancel(): void {
    this.activeModal.close(JSON.parse(localStorage.getItem("users") || '{}'));
  }

}
