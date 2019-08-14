[Demo](https://ng-lazy-img.firebaseapp.com/)

## Getting Started
Add the directive to your app by run this command `npm i --save ng-lazy-img` in your terminal.

Then import the directive into your module , such as app.module.ts
```

import { NgLazyImgModule } from 'ng-lazy-img';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    ...
    NgLazyImgModule.forRoot({
      defaultImagePath: '/assets/default.png',
      errorImagePath: '/assets/error.png',
      threshold: .4,
      rootMargin:'0px'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


Add the direcive in html image tag.

``` <img NgLazyImg [src]="imgPath"> ```


Now, should images loading lazily in browsing.


##Notes:
The directive  will show default image until target image is loading.

This directive is using Intersection Observer API for implementing lazy loading. 

[Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
we can see an explanation our parameters in doc.
- threshold 
- rootMargin
