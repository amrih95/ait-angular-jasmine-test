import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../interface/users';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  listUsers: Array<Users> = [];
  data = new BehaviorSubject<any[]>([]);
 

  constructor(public modalService: NgbModal, public _MainService: MainService) { }

  ngOnInit(): void {
    this._MainService.getData.subscribe(response=>{
      this.listUsers = response;
    });
  }

}
