import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MainService } from './services/main.service';
import { HttpClient } from '@angular/common/http';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [AppComponent,UserListComponent,UserRegistrationFormComponent],
      providers: [
        {provide: MainService, useValue: 'https://jsonplaceholder.typicode.com/users'}, NgbActiveModal, FormBuilder
      ]
    }).compileComponents().then(() => {
    });

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render register button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let instance: HTMLElement = fixture.nativeElement;
    let app: AppComponent;
    app = fixture.debugElement.componentInstance;
    instance = fixture.debugElement.nativeElement;
    let button = instance.querySelector('#btnRegister');
    expect(button?.textContent).toContain('Register new user', 'button renders');
    // TODO: write unit test that expect register button has show in app
  });

  it('should show user registration form dialog when register button clicked', () => {
    
    // TODO: write unit test that expect user registration form rendered at dialog when register button clicked
  });

  it('should load data from https://jsonplaceholder.typicode.com/users, so it can bind to user-list component', (inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.get('https://jsonplaceholder.typicode.com/users').subscribe();

      backend.expectOne({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET'
      });

      expect(backend.expectNone.length).toBeGreaterThan(1);
  })));

  it('should render user-list component', () => {
    // TODO: write unit test that expect user-list component has show in app with data provided from https://jsonplaceholder.typicode.com/users
  });

  it('should store data to localStorage when "Add" button in user-registration-form dialog clicked', () => {
    // TODO: write unit test that expect entried data to append to localStorage, then close the dialog
  });

  it('should close user-registration-form when "Close" button in user-registration-form dialog clicked', waitForAsync(() => {
    const fixture = TestBed.createComponent(UserRegistrationFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    

    // TODO: write unit test that expect user-registration-form dialog closed when button clicked
  }));
});
