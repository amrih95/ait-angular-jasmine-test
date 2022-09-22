import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../interface/users';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  @Input() listUsers: Array<Users> = [];

  constructor(public _MainService: MainService) { }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }
  
  displayedColumns: string[] = ['userName', 'fullName', 'email', 'company', 'address'];
}
