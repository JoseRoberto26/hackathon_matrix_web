import { AgentService } from './../../services/agentService';
import { LocationService } from './../../services/locationService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Marker } from '@agm/core/services/google-maps-types';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private locationService: LocationService, private agentService: AgentService) { }

  locations: Array<any>;
  agents: Array<any>;
  usingForm: boolean = false;


  ngOnInit() {
     /* this.locationService.getAllLocations().subscribe(response =>{
      this.locations = response;
      console.log(this.locations);
    })  
    
    this.agentService.getAllAgentLocations().subscribe(response =>{
this.agents = response;
console.log(this.agents);
    }) */
  }

  usandoForm(){
    this.usingForm = !this.usingForm;
    console.log(this.usingForm);
  }

  

  

}
