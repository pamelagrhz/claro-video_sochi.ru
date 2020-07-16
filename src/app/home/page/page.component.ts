import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './../home.service';
import * as countdown from 'countdown';
import { Subscription } from 'rxjs';

//countdown
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
 
  changeVideo() {
   console.log("click desde video-bar");  }
  clickEventsubscription:Subscription;
  //countdown
  time: Time =null;
  
  
  constructor(private homeService: HomeService) { 
    this.clickEventsubscription = this.homeService.getClickEvent (). subscribe (() => { 
      this.changeVideo(); 
      })
  }
  
  ngOnInit(): void {    
    //countdown
    const date = new Date('2020-07-25');
    date.setHours(0);
    countdown(date,(ts)=>{
      this.time =ts;
    },countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS) 
    
    function changeVideo () { 
      } 
  
  }

}
