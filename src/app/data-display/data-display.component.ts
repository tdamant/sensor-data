import {Component, OnInit} from '@angular/core';
import * as data from '../data/sensor_readings.json';

const CHUNKSIZE = 20;

export type SensorData = {
  id: string,
  box_id: string,
  sensor_type: string,
  unit: string,
  name: string,
  range_l: number,
  range_u: number,
  longitude: number,
  latitude: number,
  reading: number,
  reading_ts: string
};


@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  allReadings: SensorData[];
  chunkedReadings: SensorData[][];
  chunkToShow: SensorData[];
  selectedPage: number;
  constructor() { }

  ngOnInit(): void {
    this.allReadings = data.readings;
    this.chunkedReadings = this.chunkData(this.allReadings);
    this.selectedPage = 1;
    this.chunkToShow = (this.chunkData(this.allReadings))[this.selectedPage - 1];
  }

  private chunkData(dataToChunk: SensorData[]): SensorData[][] {
    const chunkedReadings: SensorData[][] = [];
    for (let i = 0; i < dataToChunk.length; i += CHUNKSIZE) {
      const items = dataToChunk.slice(i, i + 20);
      chunkedReadings.push(items);
    }
    return chunkedReadings;
  }

  onPageSelected(page: number) {
    this.selectedPage = page;
    this.chunkToShow = this.chunkedReadings[page - 1];
  }

  onOrderBy({column, direction}: {column: 'sensor_type' | 'reading_ts', direction: 'ASC' | 'DESC'}) {
    this.allReadings = this.sortAllReadings(column, direction);
    this.chunkedReadings = this.chunkData(this.allReadings);
    this.selectedPage = 1;
    this.chunkToShow = this.chunkedReadings[this.selectedPage - 1];
  }

  private sortAllReadings(column: 'sensor_type' | 'reading_ts', direction: 'ASC' | 'DESC') {
    return this.allReadings.sort((a, b) => {
      if (column === 'sensor_type') {
        return direction === 'ASC' ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column]);
      } else {
        const aDate = Date.parse(a[column]);
        const bDate = Date.parse(b[column]);
        return direction === 'ASC' ? aDate - bDate : bDate - aDate;
      }
    });
  }
}
