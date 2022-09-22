import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  form!: FormGroup;
  isSubmitted: boolean = false;
  
  constructor(private activeModal: NgbActiveModal, public formBuilder: FormBuilder, public _MainService: MainService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      company: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  submit() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      return
    } else {
      let _data = {
        username: this.form.get('username')?.value,
        name: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        company: {
          name: this.form.get('company')?.value
        },
        address: {
          city: this.form.get('address')?.value
        }
      }

      let stored = JSON.parse(localStorage.getItem("users") || '{}');
      stored.push(_data);
      let newStored = localStorage.setItem("users", JSON.stringify(stored));
      this.activeModal.close(newStored);
    }
  }    

  cancel () {
    this.activeModal.close();
  }

  get errorControl() {
    return this.form.controls;
  }

}
