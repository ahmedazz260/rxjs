import { Component, OnInit } from '@angular/core';
import { concat, filter, forkJoin, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
  user$!: Observable<IUser>;
  constructor() {}

  ngOnInit() {
    const user: IUser = {
      name: 'ahmed',
      phone: 'azzouz',
      email: 'ahmedas@dfsaf.ca',
    };
    this.user$ = of(user);

    of('test', true, 2).subscribe((val) => console.log(val));
  }
}

interface IUser {
  name: string;
  phone: string;
  email: string;
}
