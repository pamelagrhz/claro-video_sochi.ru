import { Component, OnInit} from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-video-bar',
  templateUrl: './video-bar.component.html',
  styleUrls: ['./video-bar.component.css']
})
export class VideoBarComponent implements OnInit {
  name: string ;
  public items: Array<string>;

  constructor(private homeService:HomeService) {
    this.items = ['https://www.youtube.com/watch?v=EfK-WX2pa8c',
    ' https://www.youtube.com/watch?v=EfK-WX2pa8c','https://www.youtube.com/watch?v=bJ9r8LMU9bQ'
    ,'https://www.youtube.com/watch?v=AL8chWFuM-s',' https://www.youtube.com/watch?v=ttJBdr6eBuo']
  
  }
  clickMe(name) {
    this.homeService.sendClickEvent(name);
  }

  ngOnInit(): void {    
    
  }

}
