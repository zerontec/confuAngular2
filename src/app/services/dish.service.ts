import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//import { setTimeout } from  'timers';
import { Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

  //postComment: any;

@Injectable()
export class DishService {

  constructor() { }


   getDishes(): Observable<Dish[]> {

    return Observable.of(DISHES).delay (2000);
    }
  

  getDish(id: number): Observable<Dish>{

    return Observable.of(DISHES.filter((dish) => (dish.id === id)) [0]).delay (2000);
  }

  getFeaturedDish(): Observable<Dish> {

    return Observable.of(DISHES.filter((dish) => (dish.featured))[0]).delay(2000);


  }

  //esta par seleccionar 1 en disdetail e ir pasando next o back
  getDishIds(): Observable<number[]>{

    return Observable.of(DISHES.map(dish => dish.id)).delay(2000);
  }

  
}
