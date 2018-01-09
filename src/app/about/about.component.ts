import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

import { LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
leaders: Leader[];
selectdLeader: Leader;
  constructor( private leaderService: LeaderService) { }

  ngOnInit() {

<<<<<<< HEAD
this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
=======
this.leaderService.getLeaders().then(leaders => this.leaders = leaders);
>>>>>>> 38ed3e0db41f6eb4a29edf5cc6d38fbe27d0d6f9

  }

  onSelect(leader: Leader){

    this.selectdLeader = leader;
  }

}
