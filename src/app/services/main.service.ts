import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { /* TODO document why this constructor is empty */ }

  getAllData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap(
        {
          next: (data) => data,
          error: (error) => console.log(error)
        }
      )
    )
  }

}
