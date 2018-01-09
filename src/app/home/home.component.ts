import { Component, OnInit } from '@angular/core';
import { Dish} from '../shared/dish';
import { DishService} from '../services/dish.service';
import { Promotion} from '../shared/promotion';
import { PromotionService} from '../services/promotion.service';
import { Leader} from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  constructor( private dishservice: DishService,
   private promotionservice: PromotionService, private  leaderservice:LeaderService) { }

  ngOnInit() {
<<<<<<< HEAD
this.dishservice.getFeaturedDish() .subscribe(dish => this.dish = dish);
this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion) ;
this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);
=======
this.dishservice.getFeaturedDish() .then(dish => this.dish = dish);
this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion = promotion) ;
this.leaderservice.getFeaturedLeader().then(leader => this.leader = leader);
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9
  }

}
