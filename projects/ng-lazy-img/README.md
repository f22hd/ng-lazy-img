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
    NgLazyImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## How to use it?

Add the direcive in html image tag.

``` <img NgLazyImg default='/assets/default.png' [src]="imgPath"> ```


You can use default image until target image loading.

Now, should images loading lazily in browsing.
