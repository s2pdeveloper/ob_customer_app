import { Component, OnInit } from '@angular/core';
import {
  PhotoViewer, Image, ViewerOptions,
  capShowOptions, capShowResult
} from '@capacitor-community/photoviewer';
import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit {

  options: ViewerOptions = {} as ViewerOptions;
  pvPlugin: any;
  platform: string;
  constructor() { }

  ngOnInit() {
    this.platform = Capacitor.getPlatform();
    this.pvPlugin = PhotoViewer;
  }

  async previewImage(url) {
    console.log(url);
    this.isPreview=true;
    const opt: capShowOptions = {} as capShowOptions;
    opt.images = [{ url: url, title: '' }];
    opt.mode = 'one';
    // if( mode === 'one' || mode === 'slider') {
    //   opt.startFrom = startFrom;
    // }
    // if(options) {
    //   opt
    console.log("url.........................", url);
    try {
      const ret = await this.pvPlugin.show(opt);
      console.log("ret", ret);

      // if(ret.result) {
      //     return Promise.resolve(ret);
      // } else {
      //     return Promise.reject(ret.message);
      // }
    } catch (err) {
      console.log("err", err);
    }

  }
}
