import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  //Used for making API call
  fetchData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
