import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { PageSelectComponent } from './page-select/page-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    TableHeaderComponent,
    DataTableComponent,
    PageSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
