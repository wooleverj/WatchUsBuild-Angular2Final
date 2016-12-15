import { Race } from '../races/race';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RaceService } from '../races/race.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  private race:Race;

  constructor(
    private route: ActivatedRoute,
    private raceService: RaceService
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) =>  
        this.raceService.getRace(params['id'])
        .subscribe(data => this.race = data)
        );
  }

  getRace(){
    var test: number;
    if(this.race){
      test = this.race.id;
    }
    else{
      test = 0;
    }
    return test;
  }
   

}
