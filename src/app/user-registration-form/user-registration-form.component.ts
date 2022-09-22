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
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
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
        userName: this.form.get('userName')?.value,
        fullName: this.form.get('fullName')?.value,
        email: this.form.get('email')?.value,
        company: this.form.get('company')?.value,
        address: this.form.get('address')?.value
      }
      this._MainService.setData(_data);
      this.activeModal.close();
    }
  }    

  cancel () {
    this.activeModal.close();
  }

  get errorControl() {
    return this.form.controls;
  }

}
