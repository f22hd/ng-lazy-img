import { Directive, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[Lazyimg]'
})
export class LazyimgDirective {

  @HostBinding('attr.src') srcAttr  = null;
  @Input() src : string;
  @Input() default : string;

  constructor(private imgElement:ElementRef) {
   }


   ngAfterContentInit(){
    this.srcAttr = this.default;
    this.canLazyLoad() ? this.lazyLoadingImage()  : this.loadImage();
  }


  private loadImage(){
      this.srcAttr = this.src;
  }

  private canLazyLoad(){
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadingImage(){
    const options = {
      rootMargin: '0px',
      threshold: .40
    }
    const obs = new IntersectionObserver((entries) => {
          entries.forEach( ({isIntersecting}) => {
              if(isIntersecting){          
                  this.loadImage();
                  obs.unobserve(this.imgElement.nativeElement);
              }
          });
    },options);

    obs.observe(this.imgElement.nativeElement);

  }
}
