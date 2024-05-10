import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private readonly HttpClient: HttpClient) { }

  getFoodList() {
    return this.HttpClient.get('http://localhost:3000/food');
  }
}
