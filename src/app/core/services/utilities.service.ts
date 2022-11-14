import { Injectable } from '@angular/core';
import { PickerController } from '@ionic/angular';
// import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Plugins } from '@capacitor/core';
// import {
//   DatePickerOptions,
//   DatePickerPluginInterface,
// } from '@capacitor-community/date-picker';
// const DatePicker: DatePickerPluginInterface = Plugins.DatePickerPlugin as any;
const selectedTheme = 'light';
class State {
  public id: number;
  public name: string;
}
// import * as moment from 'moment-timezone';
const timeZone = 'Asia/Kolkata';
@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor(private pickerCtrl: PickerController) {}
  date: string = '';
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
  // async openPickerST(current) {
  //   const options: DatePickerOptions = {};
  //   options.mode = 'date';
  //   if (current) {
  //     options.date = new Date(current).toISOString();
  //   }
  //   options.locale = 'en';
  //   options.is24h = true;
  //   options.doneText = 'ok';
  //   options.cancelText = 'cancel';
  //   return DatePicker.present(options).then((date) => {
  //     let d = moment(date.value).tz(timeZone).format('YYYY-MM-DD');
  //     return d;
  //   });
  // }
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
