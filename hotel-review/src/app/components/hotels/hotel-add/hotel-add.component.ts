import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";

import { ToastrService } from 'ngx-toastr';
import { HotelsService } from '../../../core/services/hotels.service';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css'],
  animations: [appAnimations]
})
export class HotelAddComponent implements OnInit {
    hotelForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
        imageUrl: new FormControl(''),
        hotelUrl: new FormControl('')
    });
      
    constructor(private hotelsService : HotelsService,
            private toastr : ToastrService,
            private router: Router) { }

    ngOnInit() { }
    
    onSubmit() {
        this.hotelForm.value.username = sessionStorage.getItem('username');
        this.hotelForm.value.raiting = 0;
        this.hotelForm.value.voteCount = 0;
        this.hotelForm.value.voteUsers = [];
        this.hotelsService.addHotel(this.hotelForm.value).subscribe(data => {
            this.router.navigate(['/hotels']);
            this.toastr.success('Successfully add ' +  this.hotelForm.value.name + '!');
        });
    }

}
