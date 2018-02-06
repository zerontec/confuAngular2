import { Component, OnInit  } from '@angular/core';

import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
import { FormGroup   } from '@angular/forms/src/model';
import { FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {
    
    dish: Dish;
    dishIds: number[];
    prev: number;
    next: number;
    commentform:FormGroup;
    comment:Comment;


    formErrors = {
      'author': '',
      'comment': ''
    };
    validationMessages ={

      'author': {
        'required': 'Name is required.',
        'minlength': 'Name must be at least 3 characters long.',
        'maxlength': 'Name cannot be more than 25 characters long.'
    },

      'comment':{ 
      'required': 'comment is required',
      'minlength': 'Name must be at least 5 characters long.',
      'maxlength': 'Name cannot be more than 25 characters long.'
    }
  
  }

    commentForm: FormGroup;

  constructor( private dishservice: DishService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location) { }
    
  ngOnInit() {

    this.createForm();

    this.dishservice.getDishIds()
    .subscribe(dishId => this.dishIds = dishId);

    this.route.params
    .switchMap((params: Params) =>this.dishservice.getDish(+params['id']) )
    .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});
  }

createForm(){
this.commentForm =this.fb.group({
  author:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  rating: 5,
  comment: [ '', [Validators.required, Validators.minLength(5)]]
});

this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
this.onValueChanged('');

}

onValueChanged( data?: any){
 if (!this.commentForm){return;}
 const form = this.commentForm;
 for(const field in this.formErrors){

  //limpiar previo mensajes de erro
this.formErrors[field] = '';
const control = form.get(field);
if (control && control.dirty && !control.valid){
  const messages = this.validationMessages[field];
  for(const key in control.errors){
    this.formErrors[field] += messages[key] + ' ';
  }
}

 }

}

  setPrevNext(dishId: number){
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]


  }
 onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    console.log(this.comment);
    this.dish.comments.push(this.comment);
    this.commentForm.reset({
      name: '',
      rating: 5,
      comment: ''
      });
  }
  goBack(): void{

    this.location.back();
  }

  
  
}
