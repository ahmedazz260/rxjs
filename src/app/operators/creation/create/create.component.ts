import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createObs$!:Observable<string>;
  constructor() { }
  ngOnInit() {
   this.createObs$ = Observable.create(function(obs:Subscriber<string>){
      obs.next('this is a create operator!');
      obs.complete();
    })
    this.createObs$.subscribe((val:string)=>console.log('create operator',val))
  }

}
