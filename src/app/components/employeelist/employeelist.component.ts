import { Component, OnInit } from '@angular/core';
import {EventsService} from 'src/app/services/events.service';
import {Event} from 'src/app/Model/event';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  events: Event[] = [];
  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.events=this.eventsService.getEvents();
    
  }
  funcDelete(e:Event){
    this.eventsService.funcDelete(e);
  }
  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventsService.addEvent(eventName, desc, speaker);
  }

}
