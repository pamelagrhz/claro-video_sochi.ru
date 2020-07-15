import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';
import {PageComponent} from '../home/page/page.component'


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    HomeService
  ],
  exports: [
    PageComponent
  ]
})
export class HomeModule { }
