import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgLazyImgModule } from 'ng-lazy-img';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    NgLazyImgModule.forRoot({
      defaultImagePath:'/assets/default.png',
      threshold: .4,
      rootMargin:'0px'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
