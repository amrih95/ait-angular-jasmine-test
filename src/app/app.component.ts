import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }
  title = 'ait-angular-jasmine-test';

  showNewUserForm() {
    const modalRef = this.modalService.open(UserRegistrationFormComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }
}
