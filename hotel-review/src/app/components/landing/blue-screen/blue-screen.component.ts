import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-blue-screen',
  templateUrl: './blue-screen.component.html',
  styleUrls: ['./blue-screen.component.css']
})
export class BlueScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
	  let interval = 
	  setInterval(()=>{
		  this.router.navigate(['/auth/login']);
		  clearInterval(interval);
		  }, 3500);
  	
           
  }

}
