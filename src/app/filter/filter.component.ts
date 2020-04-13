import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  @Output() filterBy = new EventEmitter<string>();
  ngOnInit(): void {
  }


  filter(filterValue: string) {
    this.filterBy.emit(filterValue);
  }

}
