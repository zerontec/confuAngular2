import { Injectable } from '@angular/core';

import{ Promotion} from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';
//import { setTimeout } from 'timers';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
=======
//import { setTimeout } from 'timers';

>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9


@Injectable()
export class PromotionService {

  constructor() { }



<<<<<<< HEAD
  getPromotions():Observable  <Promotion[]> {
    
        return Observable.of(PROMOTIONS).delay (2000);
        }

      getPromotion(id: number): Observable<Promotion>{
    
        return Observable.of(PROMOTIONS.filter((promo) =>(promo.id === id) ) [0]).delay(2000);
      }
    
      getFeaturedPromotion(): Observable<Promotion> {
    
        return Observable.of(PROMOTIONS.filter((promo) => (promo.featured))[0]).delay(2000);
    
    
        }
      
=======
  getPromotions(): Promise  <Promotion[]> {
    
        return new Promise(resolve =>{
          setTimeout(()=>resolve(PROMOTIONS), 2000);
        });
      }
      getPromotion(id: number): Promise<Promotion>{
    
        return new Promise(resolve=>{
          setTimeout(()=>resolve(PROMOTIONS.filter((promo) =>(promo.id === id) ) [0]),2000)
      });}
    
      getFeaturedPromotion(): Promise <Promotion> {
    
        return new Promise(resolve=>{setTimeout(() =>resolve (PROMOTIONS.filter((promo) => (promo.featured))[0]),2000);
    
    
        });
      }
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9

}
