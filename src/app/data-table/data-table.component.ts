import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SensorData} from '../data-display/data-display.component';
import {Position} from '../map-iframe/map-iframe.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }
  @Input() readings: SensorData[];
  @Output() positionClicked = new EventEmitter<Position>();

  ngOnInit(): void {
  }
  setPosition(reading: SensorData) {
    this.positionClicked.emit({longitude: reading.longitude, latitude: reading.latitude});
  }

}
