import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public values: string = '';
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  constructor() {
    this.level = "L";
    this.values = "QR code string value";
    this.width = 200;
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }
}