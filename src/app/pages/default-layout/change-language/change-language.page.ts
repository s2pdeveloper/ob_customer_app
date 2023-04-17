import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.page.html',
  styleUrls: ['./change-language.page.scss'],
})
export class ChangeLanguagePage implements OnInit {
  selectedLanguage: string = '';
  languages = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'हिंदी',
      value: 'hi',
    },
    {
      label: 'मराठी',
      value: 'mr',
    },
  ];
  constructor(
    private toastService: ToastService,
    private langService: LanguageService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.langService.getLang();
  }

  async setLanguage($event) {
    this.selectedLanguage = $event.target.value;
    if (this.selectedLanguage != this.langService.getLang()) {
      await this.toastService.successToast('Language Change Successfully');
    }
    this.langService.setLang(this.selectedLanguage);
  }
}
