import { Injectable } from '@angular/core';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  requestPermission = async ()=>{
    let permStatus = await Camera.checkPermissions();

    if (permStatus.camera === 'denied') {
      permStatus = await Camera.requestPermissions({permissions:['camera','photos']});
    }
    else if (permStatus.photos === 'denied') {
      permStatus = await Camera.requestPermissions({permissions:['camera','photos']});
    }
  }
}
