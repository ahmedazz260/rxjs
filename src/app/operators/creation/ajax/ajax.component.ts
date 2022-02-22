import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {
  users$!:Observable<any>;
  constructor() { }

  ngOnInit() {
    const name_baseURI = `https://random-data-api.com/api/name/random_name`;
     this.users$ = ajax(name_baseURI);
  }
}
