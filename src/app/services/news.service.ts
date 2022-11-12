import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getTopHeandLines(){
    return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2022-10-12&sortBy=publishedAt&apiKey=b564727b07994ff98422b047defa17fe')
  }
}
