import { Injectable } from '@angular/core';
import { ViewerOptions, capShowResult, capShowOptions, PhotoViewer, Image } from '@capacitor-community/photoviewer';

@Injectable({
  providedIn: 'root'
})
export class PhotoViewerService {

  pvPlugin: any;
  platform: string;
  constructor() {
    this.pvPlugin = PhotoViewer;
  }

  async show(imageList: Image[], mode: string,
    startFrom: number = 0, options?: ViewerOptions): Promise<capShowResult> {
    const opt: capShowOptions = {} as capShowOptions;
    opt.images = imageList;
    opt.mode = mode;
    if (mode === 'one' || mode === 'slider') {
      opt.startFrom = startFrom;
    }
    if (options) {
      opt.options = options;
    }
    try {
      console.log(opt)
      const ret = await this.pvPlugin.show(opt);
      if (ret.result) {
        return Promise.resolve(ret);
      } else {
        return Promise.reject(ret.message);
      }
    } catch (err) {
      const ret: capShowResult = {} as capShowResult;
      ret.result = false;
      ret.message = err.message;
      return Promise.reject(err.message);
    }
  };
  async previewImage(photoViewerConfig) {
    try {
      console.log(photoViewerConfig)
      const result = await this.show(photoViewerConfig.images, photoViewerConfig.mode, 0, photoViewerConfig.options);
      console.log("ret", result);
    } catch (err) {
      console.log("err", err);
    }
  }
}
