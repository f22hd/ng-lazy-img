import { InjectionToken } from '@angular/core';
import { NgLazyImgConfig } from './ng-lazy-img.model';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */

export const ngLazyImageConfigSerivce = new InjectionToken<NgLazyImgConfig>('ngLazyImageConfigSerivce');
