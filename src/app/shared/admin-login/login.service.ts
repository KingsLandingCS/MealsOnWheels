import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly HttpClient: HttpClient,

  ) { }

  createUser(data: any) {
    return this.HttpClient.post('http://localhost:4242/users-management/create-users', data);
  }

  loginUser(data: any) {
    console.log(data);
    return this.HttpClient.post('http://localhost:4242/users-management/login-users', data);
  }

  saveLoginTokenToLocalStorage(payload: any) {
    localStorage.setItem('accessToken', payload.token);
    localStorage.setItem('accessToken', JSON.stringify(payload.userData));
  }

}
