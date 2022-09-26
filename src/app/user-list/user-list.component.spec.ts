import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [MatTableModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user-list table', () => {
    const tableElement = document.querySelector('table#usrTbl');

    const tableHeaders = Array.from(
      tableElement!.getElementsByClassName('mat-header-cell')
    );

    const headerClasses = [
      'mat-column-userName',
      'mat-column-fullName',
      'mat-column-email',
      'mat-column-company',
      'mat-column-address'
    ];

    tableHeaders.forEach(header => {
      expect(
        headerClasses.some(item => header.classList.contains(item))
      ).toBeTruthy();
    })
    // TODO: write unit test that expect user-list table show in app
  });

  it('should render table caption', () => {
    let instance = fixture.nativeElement as HTMLElement;
    const caption = instance.querySelector('caption');
    expect(caption).toBeTruthy()
  })

  it('should re-render user-list table every time user data append', () => {

    // TODO: write unit test that expect the count of user-list shown in table equal with data from localStorage
  });
});
