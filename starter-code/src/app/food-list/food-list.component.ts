import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = foods;
  searchIsVisible: String = 'none';
  addIsVisible:    String = 'none';
  searchButton:    String = 'white';
  addButton:       String = 'white';
  newFood:         Object =  {};

  constructor() { }

  ngOnInit() {
  }

  toggleSearch()
  {
    if (this.searchIsVisible === 'none') {
      this.searchIsVisible = 'flex';
      this.addIsVisible    = 'none';
      this.searchButton    = 'orange';
      this.addButton       = 'white';
    } else {
      this.searchIsVisible = 'none';
      this.searchButton    = 'white';
    }
  }

  toggleAddForm()
  {
    if (this.addIsVisible === 'none') {
      this.addIsVisible    = 'flex';
      this.searchIsVisible = 'none';
      this.addButton       = 'orange';
      this.searchButton    = 'white';
    } else {
      this.addIsVisible    = 'none';
      this.addButton       = 'white';
    }
  }

  addNewFood()
  {
    this.foods.push(this.newFood);
    this.newFood = {};
    return;
  }
}
