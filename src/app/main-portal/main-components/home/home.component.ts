import { FoodService } from './../../../shared/food/food.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any[] = []; // Array to hold fetched data
  currentPageNumber: number = 1; // Current page number
  itemsPerPageNumber: number = 6; // Number of items per page


  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.foodService.getFoodList().subscribe((result: any) => {
      console.log(result);
      const { recipes } = result;
      recipes.forEach((element: any) => {
        this.data.push(element);
      });
    });
  }

  getRoundedValue(value: number): number {
    return Math.floor(value);
  }

}
