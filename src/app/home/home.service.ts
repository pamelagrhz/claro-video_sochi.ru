import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 private subject =new Subject<any>();
 sendClickEvent(name){
   this.subject.next(name);
   console.log("servicio " + name)
 }
getClickEvent():Observable<any>{
  return this.subject.asObservable();
}
  constructor() { }
}
