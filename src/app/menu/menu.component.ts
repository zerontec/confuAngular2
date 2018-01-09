import { Component, OnInit } from '@angular/core';
import {Dish } from '../shared/dish';
import {DISHES} from '../shared/dishes';

import { DishService} from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 dishes: Dish[];
 selectedDish: Dish;
 constructor(private dishService: DishService) { }

  ngOnInit() {

     this.dishService.getDishes()
<<<<<<< HEAD
     .subscribe(dishes => this.dishes = dishes );
=======
     .then(dishes => this.dishes = dishes );
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9
     
  }


    onSelect(dish: Dish){
        this.selectedDish = dish;
    }

}
