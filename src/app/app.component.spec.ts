import {ComponentFixture, fakeAsync, inject, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';

import { MainService } from './services/main.service';
import { FormBuilder } from '@angular/forms';

import {  MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  let fixtureDialog: ComponentFixture<UserRegistrationFormComponent>;
  let componentDialog: UserRegistrationFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatProgressBarModule
      ],
      declarations: [
        AppComponent,
        UserRegistrationFormComponent
      ],
      providers: [
        // { provide: MainService, useValue: 'https://jsonplaceholder.typicode.com/users' },
        MainService,
        FormBuilder,
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: {}
        },
        { provide: MatDialog },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents().then(() => {
      // App Component
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render register button', () => {
    const instance = fixture.nativeElement as HTMLElement;
    let button = instance.querySelector('#btnRegister');

    expect(button?.textContent).toEqual(' Register New User ');
    // TODO: write unit test that expect register button has show in app
  });

  it('should show user registration form dialog when register button clicked', () => {
    // TODO: write unit test that expect user registration form rendered at dialog when register button clicked

    // 1 Choice
    fixture.debugElement.query(By.css('#btnRegister'))
      .triggerEventHandler('click', {});

    const dialog = document.querySelectorAll('#form-user-registration-form').length;
    expect(dialog).toEqual(1);

    // 2 Choice
    // component.showNewUserForm();
    // fixture.detectChanges();
    //
    // const dialog = document.querySelectorAll('#form-user-registration-form').length;
    // expect(dialog).toEqual(1);

    // 3 Choice
    // component.dialog.open(UserRegistrationFormComponent);
    //
    // const dialog = document.querySelectorAll('#form-user-registration-form').length;
    // expect(dialog).toEqual(1);

    // Spy On Reference
    // to let spy = spyOn(component, 'showNewUserForm');
    // fixture.debugElement.query(By.css('#btnRegister')).triggerEventHandler('click', null);
    //
    // fixture.detectChanges();
    //
    // fixture.whenStable().then(() => {
    //   expect(spy).toHaveBeenCalled();
    // });
  });

  it('should load data from https://jsonplaceholder.typicode.com/users, so it can bind to user-list component', ()=> {
    
  });

  it('should render user-list component', () => {
    // TODO: write unit test that expect user-list component has show in app with data provided from https://jsonplaceholder.typicode.com/users
  });

  it('should store data to localStorage when "Add" button in user-registration-form dialog clicked', () => {
    // TODO: write unit test that expect untried data to append to localStorage, then close the dialog
    fixtureDialog = TestBed.createComponent(UserRegistrationFormComponent);
    componentDialog = fixtureDialog.componentInstance;

    fixtureDialog.detectChanges();

    // Spy On Reference
    let spy = spyOn(componentDialog, 'submit');
    fixtureDialog.debugElement.query(By.css('#add-user')).triggerEventHandler('click', null);

    fixtureDialog.detectChanges();

    fixtureDialog.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should close user-registration-form when "Close" button in user-registration-form dialog clicked', fakeAsync(() => {
    // TODO: write unit test that expect user-registration-form dialog closed when button clicked
    fixtureDialog = TestBed.createComponent(UserRegistrationFormComponent);
    componentDialog = fixtureDialog.componentInstance;

    fixtureDialog.detectChanges();

    // Spy On Reference
    let spy = spyOn(componentDialog, 'cancel');
    fixtureDialog.debugElement.query(By.css('#cancel')).triggerEventHandler('click', null);

    fixtureDialog.detectChanges();

    fixtureDialog.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));
});
