import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './user-registration-form.component';

describe('UserRegistrationFormComponent', () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all input field', () => {
    const formElement = fixture.nativeElement as HTMLElement;
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(5);
    // TODO: write unit test that expect all input field has shown in app
  });

  it('should render "Cancel" and "Add" button ', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const button = instance.querySelectorAll('.button-action button');
    expect(button.length).toEqual(2);
    // TODO: write unit test that expect "Cancel" and "Add" button has shown in app
  });

  it('check if form is valid and required fields not empty', () => {
    let isFormValid: boolean;
    const formNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usersForm')?.querySelectorAll('input')[0];
    const formFullNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usersForm')?.querySelectorAll('input')[1];
    const formEmailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usersForm')?.querySelectorAll('input')[2];
    const formCompanyElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usersForm')?.querySelectorAll('input')[3];
    const formAddressElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usersForm')?.querySelectorAll('input')[4];
    if (formNameElement) {
      formNameElement.value = 'yogi';
      formFullNameElement.value = 'yogi test';
      formEmailElement.value = 'amrihyogi@gmail.com';
      formCompanyElement.value = 'tech company';
      formAddressElement.value = 'jakarta, indonesia';
      isFormValid = fixture.componentInstance.form.valid;
    }
    fixture.whenStable().then(() => {
      expect(!isFormValid).toBeTruthy();
    })
  })
});
