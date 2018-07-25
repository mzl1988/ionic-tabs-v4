import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NativeService {

    constructor(
        private storage: Storage,
        private translate: TranslateService
    ) { }

    storageGet(key): Observable<any> {
        return new Observable(observer => {
            this.storage.get(key).then((val) => {
                observer.next(val);
            }).catch(error => {
                observer.error(error);
            });
        });
    }

    setDefaultLang(language) {
        this.translate.setDefaultLang(language);
    }

    getDefaultLang(): string {
        return this.translate.getDefaultLang();
    }
}
