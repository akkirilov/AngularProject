import { Component, Input, OnInit } from '@angular/core';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotel : HotelModel;
  constructor() { }

  ngOnInit() {
  }

}
