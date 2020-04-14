import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export type Position = {
  latitude: number,
  longitude: number
};

const API_KEY = 'AIzaSyDLUW9tOOp310dfJ7IZue0JW2Duh6xwlcc';
@Component({
  selector: 'app-map-iframe',
  templateUrl: './map-iframe.component.html',
  styleUrls: ['./map-iframe.component.css']
})
export class MapIframeComponent implements OnInit {
  iframeSource: SafeResourceUrl | undefined;
  constructor(private sanitizer: DomSanitizer) { }
  @Input() set position(position: Position | undefined) {
    if (!position) {
      this.iframeSource = undefined;
      return;
    }
    this.iframeSource = this.getIframeSource(position);
  }

  ngOnInit(): void {
  }
  getIframeSource(position: Position): SafeResourceUrl {
    const src = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${position.latitude},${position.longitude}&zoom=16`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
