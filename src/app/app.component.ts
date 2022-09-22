import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from './interface/users';
import { MainService } from './services/main.service';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  listUsers: Array<Users> = [];
  
  constructor(public modalService: NgbModal, public mainService: MainService) { }

  ngOnInit(): void {
    this.getData();
  }
  title = 'ait-angular-jasmine-test';

  getData(){
    this.mainService.getAllData().subscribe((resp: any) => {
      this.listUsers = resp;
      localStorage.setItem("users", JSON.stringify(this.listUsers));
    });
  }

  showNewUserForm() {
    const modalRef = this.modalService.open(UserRegistrationFormComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((resp) => {
      this.listUsers = resp;
    }).catch((error) => {
      console.log(error);
    });
  }
}
