import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LazyimgModule } from 'lazyimg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    LazyimgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
