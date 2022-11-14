import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AlertController,
  LoadingController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpEventType } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
import { FilesystemDirectory, Plugins } from '@capacitor/core';
import { LoaderService } from 'src/app/core/services/loader.service';
const { Device, Filesystem, Storage, App } = Plugins;
export const FILE_KEY = 'files';

interface AppUpdate {
  current: string;
  enabled: boolean;
  msg?: {
    title: string;
    msg: string;
    btn: string;
  };
  majorMsg?: {
    title: string;
    msg: string;
    btn: string;
  };
  minorMsg?: {
    title: string;
    msg: string;
    btn: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class AppUpdateService {
  updateUrl = `${environment.url}/apk/version.json`;
  apkFile = `${environment.url}/apk/app-release.apk`;
  // debugApkFile = `${environment.url}/apk/app/app-debug.apk`;
  downloadProgress: number = 0;
  myFiles: any = [];
  loading: any;
  ionAppName: string;
  ionPackageName: string;
  ionVersionNumber: string;
  ionVersionCode: string | number;
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private alertCtrl: AlertController,
    private router: Router,
    // private translate: TranslateService,
    private fileOpener: FileOpener,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async checkUpdate() {
    this.http.get(this.updateUrl).subscribe(async (info: AppUpdate) => {
      const deviceInfo = await Device.getInfo();
      // console.log('deviceInfo', deviceInfo);
      const versionNumber = deviceInfo.appVersion;
      // console.log('app version', deviceInfo.appVersion);
      if (!info.enabled) {
        this.presentAlert(
          info.majorMsg.title,
          info.majorMsg.msg,
          info.majorMsg.btn
        );
      } else {
        const splittedVersion = versionNumber.split('.');
        const serverVersion = info.current.split('.');
        // console.log(splittedVersion,'server version', serverVersion);
        if (splittedVersion.length == 3) {
          if (parseInt(serverVersion[0]) > parseInt(splittedVersion[0])) {
            this.presentAlert(
              info.majorMsg.title,
              info.majorMsg.msg,
              info.majorMsg.btn
            );
          } else if (
            parseInt(serverVersion[1]) > parseInt(splittedVersion[1])
          ) {
            this.presentAlert(
              info.minorMsg.title,
              info.minorMsg.msg,
              info.minorMsg.btn
            );
          } else if (
            parseInt(serverVersion[2]) > parseInt(splittedVersion[2])
          ) {
            this.presentAlert(
              info.minorMsg.title,
              info.minorMsg.msg,
              info.minorMsg.btn
            );
          }
        }
      }
    });
  }

  async presentAlert(header, message, buttonText = '', allowClose = false) {
    const buttons = [];
    if (buttonText != '') {
      buttons.push({
        text: buttonText,
        handler: () => {
          this.downloadApk();
        },
      });
    }
    if (allowClose) {
      buttons.push({
        text: 'CLose',
        role: 'cancel',
      });
    }
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons,
      backdropDismiss: allowClose,
    });
    await alert.present();
  }
  private convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  downloadApk() {
    this.loading = this.presentLoading();
    this.http
      .get(this.apkFile, {
        responseType: 'blob',
        reportProgress: true,
        observe: 'events',
      })
      .subscribe(
        async (event) => {
          // console.log('apk', event);
          if (event.type === HttpEventType.DownloadProgress) {
            this.downloadProgress = Math.round(
              (100 * event.loaded) / event.total
            );
            // console.log(this.downloadProgress);
            this.dismissLoading();
            this.loading = this.presentLoading();
          } else if (event.type == HttpEventType.Response) {
            this.dismissLoading();
            console.log('file downloaded');
            this.downloadProgress = 0;
            const base64 = (await this.convertBlobToBase64(
              event.body
            )) as string;
            const deleteSecretFile = async () => {
              await Filesystem.deleteFile({
                path: 's2pEdutech.apk',
                directory: FilesystemDirectory.Data,
              });
            };
            console.log('file delete', deleteSecretFile);
            const saveFile = await Filesystem.writeFile({
              path: `s2pEdutech.apk`,
              data: base64,
              directory: FilesystemDirectory.Data,
            });
            const path = saveFile.uri;
            console.log('file saveFile', saveFile);
            this.openFile(path, event.body.type);
          }
        },
        (error) => {
          console.log('error -> ', error);
        }
      );
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-download-class',
      message: `${this.downloadProgress} %  <br/> Downloading `,
      backdropDismiss: true,
      showBackdrop: false,
      mode: 'ios',
    });
    await loading.present();
    // return loading;
  }
  dismissLoading() {
    this.loadingController.dismiss();
    // this.loading.then((load) => {
    //   load.dismiss();
    // });
  }
  openFile(path, type) {
    this.dismissLoading();
    console.log('path', path, type);
    this.fileOpener
      .open(path, type)
      .then(
        (response) => {
          console.log('File is opened', response);
        },
        (error) => {
          console.log(error);
          console.log('Error opening file');
        }
      )
      .catch((error) => {
        console.log(error);
        console.log('Error opening file');
        this.presentToast('Please try to download again');
      });
    this.myFiles.unshift(path);
    Storage.set({
      key: FILE_KEY,
      value: JSON.stringify(this.myFiles),
    }).then(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
    toast.onDidDismiss().then(() => {
      navigator['app'].exitApp();
    });
  }
}
