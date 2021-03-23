import { Component, Input, OnInit } from '@angular/core';
import { AsObservable } from 'ngx-propserve';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-library-test',
  template: `
    <p>
      library-test external works!
    </p>
  `,
  styles: []
})
export class LibraryTestComponent implements OnInit {

  subject = new Subject<any>();
  titulo;

  @Input('test') @AsObservable() test$!: Observable<string>;

  constructor() { }

  getTest$ = this.test$.pipe(
    map((test) => {
      return test;
    })
  );

  ngOnInit() {
    this.titulo = this.getTest$.pipe().subscribe((data) => {
      console.log('AsObservale subscription', data);
    });
  }

}
