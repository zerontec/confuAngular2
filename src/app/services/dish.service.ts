import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//import { setTimeout } from  'timers';
<<<<<<< HEAD
import { Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
=======
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9


@Injectable()
export class DishService {

  constructor() { }


<<<<<<< HEAD
   getDishes(): Observable<Dish[]> {

    return Observable.of(DISHES).delay (2000);
    }
  

  getDish(id: number): Observable<Dish>{

    return Observable.of(DISHES.filter((dish) => (dish.id === id)) [0]).delay (2000);
  }

  getFeaturedDish(): Observable<Dish> {

    return Observable.of(DISHES.filter((dish) => (dish.featured))[0]).delay(2000);


  }
=======
   getDishes(): Promise<Dish[]> {

    return new Promise ( resolve => {
//simulado lactancia de 2 segundos 
setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: number): Promise<Dish>{

    return new Promise(resolve =>{setTimeout(() => resolve (DISHES.filter((dish) => (dish.id === id) ) [0]), 2000);
  });}

  getFeaturedDish(): Promise<Dish> {

    return new  Promise (resolve =>{ setTimeout(() => resolve (DISHES.filter((dish) => (dish.featured))[0]), 2000);


  });}
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9

}
