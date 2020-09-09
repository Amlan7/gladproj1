import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassdemo',
  templateUrl:'./ngclassdemo.component.html',
  template: `<h4>NgStyle</h4>
  `
})
export class NgclassdemoComponent {

  getColor(country) { (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

}
