import { Component } from '@angular/core';

import { NativeService } from '../../services';

@Component({
    selector: 'app-page-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(
        private nativeService: NativeService,
    ) {
    }

    switchLanguage() {
        const lang = this.nativeService.getDefaultLang() === 'en' ? 'zh-Hant' : 'en';
        this.nativeService.setDefaultLang(lang);
    }
}
