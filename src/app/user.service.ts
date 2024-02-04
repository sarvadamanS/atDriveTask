import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  fetchData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
