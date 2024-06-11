import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private readonly HttpClient: HttpClient) { }

  createUser(data: any) {
    return this.HttpClient.post('http://localhost:4242/users-management/create-users', data);
  }

}
