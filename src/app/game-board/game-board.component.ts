import { Component, Input } from '@angular/core';
import { Die } from '../die/die';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { HeatMapEnum } from '../heatMap/heatMapEnum';

@Component({
	selector: 'game-board',
	templateUrl: './game-board.component.html',
	styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
	@Input() dice: Array<Array<Die>>;
	@Input() word: string;

	HeatMapEnum = HeatMapEnum;

	boardLoaded: boolean = false;
	faUndo = faUndo;
	faExchangeAlt = faExchangeAlt;
	zoomTick: number = 1;
	heatMap: HeatMapEnum = HeatMapEnum.None;


	ngOnChanges() {
		this.boardLoaded = this.dice.length > 0;
	}

	rotateCc() {
		let tempArray = new Array<Array<Die>>();
		for (let x = 0; x < this.dice[0].length; x++) {
			let tempRow = [];
			this.dice.forEach(row => tempRow.push(row[x]));
			tempArray.push(tempRow.reverse());
		}

		this.dice = tempArray;
	}

	rotateCcw() {
		let tempArray = new Array<Array<Die>>();
		for (let x = this.dice[0].length - 1; x > -1; x--) {
			let tempRow = [];
			this.dice.forEach(row => tempRow.push(row[x]));
			tempArray.push(tempRow);
		}

		this.dice = tempArray;
	}

	flip() {
		this.dice.forEach(row => row = row.reverse());
	}
}
