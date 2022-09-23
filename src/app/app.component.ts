import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  
  constructor(public mainService: MainService, public dialog: MatDialog) { }

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
    let dialogRef = this.dialog.open(UserRegistrationFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      this.listUsers = result;
    });
  }

}
