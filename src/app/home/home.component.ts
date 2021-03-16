import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
    
  }
}
