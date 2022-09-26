import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    private http: HttpClient
  ) { /* TODO document why this constructor is empty */ }

  getAllData() {
    return this.http.get(this.url).pipe(
      tap(
        {
          next: (data) => data,
          error: (error) => console.log(error)
        }
      )
    )
  }

}
