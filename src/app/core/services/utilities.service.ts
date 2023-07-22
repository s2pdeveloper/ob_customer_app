import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  getDateWithFormat(date) {
    let value = date.split('T')[0].split('-');
    return `${value[0]}/${value[1]}/${value[2]}`;
  }

  getDateOnly(date) {
    return `${date.split('T')[0]}`;
  }
  // formatDate(value: string) {
  //   return format(parseISO(value), 'yyyy-MM-dd');
  // }

  message: string = null;

  // convert file to blob
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
}
