import { Directive, HostBinding, Input, ElementRef, Inject } from '@angular/core';
import {ngLazyImageConfigSerivce} from './ng-lazy-image-config.service';
import { NgLazyImgConfig } from './ng-lazy-img.model';

@Directive({
  selector: '[NgLazyImg]'
})
export class NgLazyImgDirective {

  
  @HostBinding('attr.src') srcAttr  = null;
  @Input() src : string;

  constructor(private imgElement:ElementRef,@Inject(ngLazyImageConfigSerivce) private config:NgLazyImgConfig) {}


   ngAfterContentInit(){
    this.srcAttr = this.config.defaultImagePath ? this.config.defaultImagePath : '';
    this.canLazyLoad() ? this.lazyLoadingImage()  : this.loadImage();
  }


  private loadImage(){
      this.srcAttr = this.src;
  }

  private canLazyLoad(){
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadingImage(){
    this.config.rootMargin = this.config.rootMargin ? this.config.rootMargin : '0px';
    this.config.threshold = this.config.threshold ? this.config.threshold : .40;

    const obs = new IntersectionObserver((entries) => {
          entries.forEach( ({isIntersecting}) => {
              if(isIntersecting){          
                  this.loadImage();
                  obs.unobserve(this.imgElement.nativeElement);
              }
          });
    },this.config);

    obs.observe(this.imgElement.nativeElement);

  }

}
