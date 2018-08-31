import { Component, OnInit } from '@angular/core';
import { appAnimations } from '../../../app.animations';

import { HotelsService } from '../../../core/services/hotels.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  animations: [appAnimations]
})
export class HotelsComponent implements OnInit {
  hotels : HotelModel[];
  selectedFieldName : string;
  userId : string;
  constructor(private hotelsService : HotelsService,
          public authService : AuthenticationService,) { }

  ngOnInit() {
      this.hotelsService
          .getAll()
          .subscribe(data => {
              this.hotels = data;
              this.orderByRaiting();
              this.selectedFieldName = 'raiting';
              this.userId = sessionStorage.getItem('id');
          });
  }
  
  change(event){
      if (event.target.value != this.selectedFieldName) {
          this.selectedFieldName = event.target.value;
          switch (this.selectedFieldName) {
        	case 'name':
        	    this.orderByName();
        		break;
        	case 'raiting':
        	    this.orderByRaiting();
                break;
            case 'hotest':
                this.orderByHotest();  
                break;
        	default:
        	    this.orderByRaiting();
        		break;
          }
      }
  }
  
  orderByName() {
      this.hotels = this.hotels.sort((a, b) => {
          return a.name.localeCompare(b.name); 
       });
  }
  
  orderByRaiting() {
      this.hotels = this.hotels.sort((a, b) => {
          return b.raiting - a.raiting; 
       });
  }
  
  orderByHotest() {
      this.hotels = this.hotels.sort((a, b) => {
          return b._kmd.ect.localeCompare(a._kmd.ect); 
       });
  }

}
