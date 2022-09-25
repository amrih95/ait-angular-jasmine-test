import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  isLoading: boolean = false;
  
  constructor(public mainService: MainService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }
  title = 'ait-angular-jasmine-test';

  getData() {
    this.isLoading = true;
    this.mainService.getAllData().subscribe((resp: any) => {
      this.listUsers = resp;
      localStorage.setItem("users", JSON.stringify(this.listUsers));
      this.isLoading = false;
    });
  }

  showNewUserForm() {
    const dialogRef =  this.dialog.open(UserRegistrationFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listUsers = result;
    });
  }
}
