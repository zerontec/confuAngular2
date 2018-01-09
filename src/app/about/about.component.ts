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

this.leaderService.getLeaders().then(leaders => this.leaders = leaders);

  }

  onSelect(leader: Leader){

    this.selectdLeader = leader;
  }

}