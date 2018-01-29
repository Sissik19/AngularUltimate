import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template : `
    <div>
      <passenger-count></passenger-count>
      <passenger-detail></passenger-detail>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{i}}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date:'yMMMMd') : "Not Checked in"}}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0}}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers : Passenger[]
  constructor(){}
  ngOnInit(){
    console.log('ngOnInit');
    this.passengers = [{
      id: 1,
      fullname: 'Camille',
      checkedIn: true,
      checkInDate: 1532943649,
      children: null
    }, {
      id: 2,
      fullname: 'Clarisse',
      checkedIn: false,
      checkInDate: 1538943649,
      children: [{name: 'Ted', age: 12}, {name: 'Chloe', age:7}]
    }, {
      id: 3,
      fullname: 'Sylvie',
      checkedIn: true,
      checkInDate: 1542943649,
      children: null

    }, {
      id: 4,
      fullname: 'Didier',
      checkedIn: false,
      checkInDate: 1533943649,
      children: [{name: 'Teddy', age: 17}]
    }, {
      id: 5,
      fullname: 'Jessy',
      checkedIn: true,
      checkInDate: 1536943649,
      children: null
    }];
  }
}
