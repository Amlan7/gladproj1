import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  FirstName: string = "pooja";
  LastName: string = "pooja";
  Age: number = 30;
  Gender: string = "Female";
  constructor() { }

  ngOnInit(): void {
  }

}
