import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly HttpClient: HttpClient) { }

  createUser(data: any) {
    return this.HttpClient.post('localhost:4242/users-management/create-users', data);
  }

  loginUser(data: any) {
    return this.HttpClient.post('localhost:4242/users-management/login-users', data);
  }

}