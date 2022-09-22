import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  data = new BehaviorSubject<Users[]>([]);
  getData = this.data.asObservable();

  constructor() { /* TODO document why this constructor is empty */ }

  setData(datas: Users) {
    this.data.next(this.data.getValue().concat([datas]));
  }
}
