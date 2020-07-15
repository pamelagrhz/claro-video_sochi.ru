import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';
import * as countdown from 'countdown';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    var fechahora =new Date();
    const date = new Date('2020-07-25');
    date.setHours(0);
    console.log(countdown(fechahora, date));
  }

}
