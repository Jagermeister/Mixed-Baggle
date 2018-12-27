import { Component, Input } from '@angular/core';
import { Settings } from './settings';
import { DiceCollection } from '../dice/diceCollection';
import { Dictionary } from '../dictionary/dictionary';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { DictionaryService } from '../dictionary/dictionary.service';
import { DiceService } from '../dice/dice.service';
import { SettingsService } from './settings.service';

@Component({
	selector: 'settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
	public showSettings: boolean = true;
	private maxSeed: number = 9999999;
	private dictionaries: Array<Dictionary>;
	private dices: Array<DiceCollection>;

	private settings: Settings;

	faAngleDown = faAngleDown;
	faAngleUp = faAngleUp;

	constructor(private dictionaryService: DictionaryService, private diceService: DiceService, private settingsService: SettingsService) { }

	ngOnInit() {
		this.settingsService.settingsFetch().subscribe(settings => this.settings = settings);
		this.settings.seed = Math.floor(Math.random() * this.maxSeed);

		this.dices = this.diceService.getAllCollections();
		this.dictionaries = this.dictionaryService.getAllCollections();

		if (this.dices.length > 0) {
			this.settings.dice = this.dices[0];
		}

		if (this.dictionaries.length > 0) {
			this.settings.dictionary = this.dictionaries[0];
		}
	}

	settingsStore() {
		this.settingsService.settingsStore(Object.assign({}, this.settings));
	}
}
