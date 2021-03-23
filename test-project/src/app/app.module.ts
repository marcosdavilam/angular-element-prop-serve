import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';
import {LibraryTestModule} from 'node_modules/library-test';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LibraryTestModule
  ],
  providers: [],
  entryComponents: [HelloComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(HelloComponent, {injector});
    customElements.define('custom-element', element);
  }

  ngDoBootstrap(): void {}
}
