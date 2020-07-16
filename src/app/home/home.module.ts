import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';
import {PageComponent} from '../home/page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoBarComponent } from './video-bar/video-bar.component'


@NgModule({
  declarations: [PageComponent, HeaderComponent, FooterComponent, VideoBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    HomeService
  ],
  exports: [
    PageComponent,
    FooterComponent,
    HeaderComponent,
    VideoBarComponent
  ]
})
export class HomeModule { }
