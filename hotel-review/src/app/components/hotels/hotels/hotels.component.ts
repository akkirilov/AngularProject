import { Component, OnInit } from '@angular/core';
import { appAnimations } from '../../../app.animations';

import { HotelsService } from '../../../core/services/hotels.service';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  animations: [appAnimations]
})
export class HotelsComponent implements OnInit {
  hotels : HotelModel[];
  constructor(private hotelsService : HotelsService) { }

  ngOnInit() {
      this.hotelsService
          .getAll()
          .subscribe(data => {
              this.hotels = data;
          });
  }

}
