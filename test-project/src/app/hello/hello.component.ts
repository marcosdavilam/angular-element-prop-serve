import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  _title = 'Angular element with library in it using @asObservable() with target in ES5';

  ngOnInit() {
  }

}
