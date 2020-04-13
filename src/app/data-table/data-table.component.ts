import { Component, OnInit, Input } from '@angular/core';
import {SensorData} from '../data-display/data-display.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }
  @Input() readings: SensorData[];

  ngOnInit(): void {
  }


}
