import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryTestModule } from 'projects/library-test/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
