import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  abc:string='assets/img/abc.jpg'
  landscape_grass:string='assets/img/landscape_grass.jpg'
  landscape_water:string='assets/img/landscape_water.jpg'
}
