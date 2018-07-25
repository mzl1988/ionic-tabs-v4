import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NativeService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private nativeService: NativeService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            // 设置语言
            this.setLanguage();
        });
    }

    setLanguage() {
        this.nativeService.storageGet('language')
            .subscribe(language => {
                this.nativeService.setDefaultLang(language ? language : 'en');
            }, error => {
                this.nativeService.setDefaultLang('en');
            });
    }
}
