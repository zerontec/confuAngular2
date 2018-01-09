import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

=======
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9

@Injectable()
export class LeaderService {

  constructor() { }
<<<<<<< HEAD
getLeaders():Observable <Leader[]>{

  return Observable.of(LEADERS).delay (2000);

  }


getLeader(id: number): Observable<Leader>{

  return Observable.of(LEADERS.filter((leader) =>(leader.id === id)) [0]).delay (2000);
  }

getFeaturedLeader(): Observable<Leader> {

  return Observable.of(LEADERS.filter((leader) => (leader.featured))[0]).delay(2000);
}
=======
getLeaders():Promise <Leader[]>{

  return new Promise(resolve =>{
    setTimeout(() => resolve(LEADERS), 2000);

  });

}
getLeader(id: number): Promise<Leader>{

  return new  Promise (resolve =>{
    setTimeout(() => resolve(LEADERS.filter((leader) =>(leader.id === id)) [0]), 2000)
  });}

getFeaturedLeader(): Promise<Leader> {

  return new Promise(resolve =>{
    setTimeout(()=>resolve(LEADERS.filter((leader) => (leader.featured))[0]),2000)
});}
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9

}
