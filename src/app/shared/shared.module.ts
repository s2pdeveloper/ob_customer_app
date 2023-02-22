import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { DataUnavailableComponent } from './data-unavailable/data-unavailable.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PopoverComponent } from './popover/popover.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { ViewGalleryImagesComponent } from './view-gallery-images/view-gallery-images.component';
import { AnimateItemsDirective } from '../directives/animate-items.directive';
import { ParallaxHeader } from '../directives/parallax-header';
// import { ParallaxHeaderDirective } from '../directives/parallax-header.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const PIPES = [TruncatePipe, CapitalizePipe, DateAgoPipe];
const COMPONENTS = [
  // ParallaxHeaderDirective,
  ParallaxHeader,
  AnimateItemsDirective,
  GalleryListComponent,
  ViewGalleryImagesComponent,
  DataUnavailableComponent,
  PopoverComponent
];
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [...COMPONENTS, ...PIPES, TranslateModule],
})
export class SharedModule { }
