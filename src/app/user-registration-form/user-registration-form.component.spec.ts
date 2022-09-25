import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
});
