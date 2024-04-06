import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  counter:any = 0;

  /***Subject Code start***/
  // public stringSubject = new Subject<string>();
  public stringSubject = new BehaviorSubject<string>('');

  passValue(data:any) {
    this.stringSubject.next(data);
  }
  /***Subject Code end***/


  getApi() {
    let url = 'https://jsonplaceholder.typicode.com/comments'
    return this.http.get(url)
  }

  getProduct(){
    let url = 'https://dummyjson.com/products?limit=100&skip=0&select=title,price'
    return this.http.get(url)
  }
}
