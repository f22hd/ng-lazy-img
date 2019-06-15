import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgLazyImgDirective } from './ng-lazy-img.directive';
import { NgLazyImgConfig } from './ng-lazy-img.model';
import {ngLazyImageConfigSerivce} from './ng-lazy-image-config.service';

@NgModule({
  declarations: [ NgLazyImgDirective],
  imports: [
  ],
  exports: [NgLazyImgDirective]
})
export class NgLazyImgModule {
  static forRoot(config:NgLazyImgConfig):ModuleWithProviders{
    return {
      ngModule:NgLazyImgModule,
      providers:[
        {
          provide: ngLazyImageConfigSerivce,
          useValue:config
        }
      ]
    }
  }
 }
