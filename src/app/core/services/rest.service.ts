import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastService } from './toast.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

export const FILE_KEY = 'files';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	mediaDataSubject = new Subject();

	constructor(private apiService: ApiService, private userService: UserService, private fileOpener: FileOpener,
		private toastService: ToastService) { }

	searchPincode(pincode: string) {
		debounceTime(500);
		distinctUntilChanged();
		return this.apiService.get(`/shared/pincode/${pincode}`,).pipe(map(data => {
			if (data && data.result) {
				return data.result;
			} else {
				return null;
			}
		}))
	}
	convertToBase64(payload) {
		return this.apiService.get(`/shared/convertToBase64`, payload).pipe(map(data => {
			if (data && data.result) {
				return data.result;
			} else {
				return null;
			}
		}))
	}
	downloadSignUrl(path) {
		let url = `/shared/url?filePath=${path}`;
		return this.apiService.get(url).pipe(map(data => {
			if (data && data.result) {
				return data.result;
			} else {
				return null;
			}
		}))
	}

	async saveFile(file, base64) {
		const saveFile = await Filesystem.writeFile({
			path: file.fileName,
			data: base64,
			directory: Directory.Data
		});
		const path = saveFile.uri;
		await this.fileOpener.open(path, file.fileType);
		this.generateLocalNotification(file);
	}

	async generateLocalNotification(file) {
		const notification = await LocalNotifications.schedule({
			notifications: [
				{
					title: "File downloaded",
					body: file.fileName,
					id: 1,
					sound: null,
					attachments: file.fileName,
					autoCancel: true
				}
			]
		});
		LocalNotifications.addListener('localNotificationActionPerformed', async (payload) => {
			await this.fileOpener.open(file, file.fileType);
		});
	}
	deleteMedia(payload) {
		return this.apiService.put(`/shared/remove`, payload).pipe(map(data => {
			if (data && data.result) {
				return data.result;
			} else {
				return null;
			}
		}))
	}
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

	async createAndShareFiles({ title, text, files, shopName }) {
		//2.  save file in cache
		await Filesystem.writeFile({
			path: `${shopName}_QR_code.pdf`,
			data: files,
			directory: Directory.Cache,
		});
		//3. get full uri of the saved image
		let imgData = await Filesystem.getUri({
			path: `${shopName}_QR_code.pdf`,
			directory: Directory.Cache,
		});
		await Share.share({
			title,
			text,
			files: [imgData.uri],
		});
	}

}