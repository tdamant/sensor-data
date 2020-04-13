import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-select',
  template: `
    <div class ="pageSelectors">
      <div class="pageSelect" (click)="selectPage(1)"><<</div>
      <div *ngFor="let page of selectPageOptions">
        <div class="pageSelect" [ngStyle]="{'text-decoration': page === currentPage ? 'underline' : 'none'}" (click)="selectPage(page)">{{page}}</div>
      </div>
      <div class="pageSelect" (click)="selectPage(totalPages)">>></div>
    </div>
  `,
  styleUrls: ['./page-select.component.css']
})
export class PageSelectComponent implements OnInit {
  selectPageOptions: number[];
  currentPage: number;

  constructor() {
  }

  @Input() totalPages: number;
  @Input() set selectedPage(page: number) {
    this.currentPage = page;
    this.selectPageOptions = this.getSelectPageOptions(page);
  }
  @Output() pageSelected = new EventEmitter<number>();

  ngOnInit(): void {
    console.log(this.currentPage);
    this.selectPageOptions = this.getSelectPageOptions(this.currentPage);
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.selectPageOptions = this.getSelectPageOptions(this.currentPage);
    this.pageSelected.emit(page);
  }

  getSelectPageOptions(selectedPage: number) {
    return [selectedPage - 2, selectedPage - 1, selectedPage, selectedPage + 1, selectedPage + 2]
      .filter(page => page >= 1 && page <= this.totalPages);
  }


}
