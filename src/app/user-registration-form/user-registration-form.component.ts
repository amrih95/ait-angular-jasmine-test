import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    } else {
      const data = {
        username: this.form.get('userName')?.value,
        name: this.form.get('fullName')?.value,
        email: this.form.get('email')?.value,
        company: {
          name: this.form.get('company')?.value
        },
        address: {
          city: this.form.get('address')?.value
        }
      };
      const stored = JSON.parse(localStorage.getItem("users") || '{}');
      stored.push(data);
      localStorage.setItem("users", JSON.stringify(stored));
      this.dialogRef.close(JSON.parse(localStorage.getItem("users") || '{}'));
    }
  }

  cancel() {
    this.dialogRef.close(JSON.parse(localStorage.getItem("users") || '{}'));
  }

  get errorControl() {
    return this.form.controls;
  }

}
