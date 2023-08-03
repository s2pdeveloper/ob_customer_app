import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { compressAccurately } from 'image-conversion';
import { ModalController } from '@ionic/angular';
import { CropImagePage } from 'src/app/shared/crop-image/crop-image.page';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(
    private modalController: ModalController,

  ) { }

  requestPermission = async () => {
    let permStatus = await Camera.checkPermissions();
    await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
    if (permStatus.camera === 'denied') {
      permStatus = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
    }
    else if (permStatus.photos === 'denied') {
      permStatus = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
    }
  }
  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });
    return image
  }

  async openPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });
    let imageData = {
      base64String: `data:image/jpeg;base64,${image.base64String}`,
      format: image.format,
      path: image.path
    }
    return await this.presentCropModal(
      imageData
    );
  }

  async getBlobFromPath(image: Photo) {
    const response = await fetch(image.webPath);
    const blob = await response.blob();
    return blob
  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  base64ToArrayBuffer(imageData) {
    var binary_string = atob(imageData);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  async base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    //const blob = new Blob(neu)
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      console.log(reader)
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string')
        }
      };
      reader.readAsDataURL(blob);
    });
  }


  async presentCropModal(image) {
    const modal = await this.modalController.create({
      component: CropImagePage,
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      componentProps: {
        image: image.base64String,
      },
    });
    await modal.present();
    let data = await modal.onDidDismiss();
    let imageData = {
      path: data.data.split('data:image/png;base64,')[1],
      format: image.format
    }
    let file = await this.urlToObject(imageData);
    //return file with detail (path,base64,size,type)
    let fileData = {
      fileName: file.name,
      fileType: file.type,
      size: file.size,
      file: file
    }
    return fileData;
  }
  urlToObject = async (image) => {
    const blob = await compressAccurately(
      this.b64toBlob(image.path, `image/${image.format}`),
      {
        size: 1000,
      }
    );
    return new File([blob], `file.${image.format}`, {
      type: blob.type,
    });
  };
}
