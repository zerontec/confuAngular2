import { Component, OnInit  } from '@angular/core';


import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {
    
    dish: Dish;

  constructor( private dishservice: DishService,
    private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {

    let id = +this.route.snapshot.params['id'];
<<<<<<< HEAD
     this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
=======
     this.dishservice.getDish(id).then(dish => this.dish = dish);
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9
  }

  goBack(): void{

    this.location.back();
  }

}
