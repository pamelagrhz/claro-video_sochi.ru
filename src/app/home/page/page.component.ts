import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';
import * as countdown from 'countdown';
import { ArrayType } from '@angular/compiler';
interface Time{
  days: number,
  hours:number,
  minutes: number,
  seconds: number
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
  
})
export class PageComponent implements OnInit {
  time: Time =null;
  
  
  constructor(private homeService: HomeService) { }
 
  ngOnInit(): void {    
    const date = new Date('2020-07-25');
    date.setHours(0);
    countdown(date,(ts)=>{
      this.time =ts;
    },countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS)
 
  }

}
