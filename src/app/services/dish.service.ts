import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//import { setTimeout } from  'timers';


@Injectable()
export class DishService {

  constructor() { }


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

}