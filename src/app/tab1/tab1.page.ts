import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsService } from '../services/news.service';
const apiKey=environment.apiKey
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  constructor(private newService:NewsService) {}

  ngOnInit(){
    this.newService.getTopHeandLines()
    .subscribe(resp=>{
      console.log(resp);
      console.log('hola');
    })
    
  }

}
