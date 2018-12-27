import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private settings: Settings;
    private settingsSubject: BehaviorSubject<Settings>;

    public settings$: Observable<Settings>;

    constructor() {
        this.settings = new Settings();
        this.settingsSubject = new BehaviorSubject<Settings>(this.settings);
        this.settings$ = this.settingsSubject.asObservable();
    }

    settingsFetch(): Observable<Settings> {
        return this.settings$;
    }

    settingsStore(settings: Settings) {
        this.settings = Object.assign({}, this.settings, settings);
        this.settingsSubject.next(this.settings);
    }
}