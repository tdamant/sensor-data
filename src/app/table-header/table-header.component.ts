import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export type Direction = 'ASC' | 'DESC';
export type SortableColumns = 'sensor_type' | 'reading_ts';
@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  constructor() { }
  @Output() orderBy = new EventEmitter<{column: string, direction: Direction}>();
  ngOnInit(): void {
  }

  orderByColumn(column: SortableColumns, direction: Direction) {
    this.orderBy.emit({column, direction});
  }

}
