import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  num: number;
  constructor() {
    this.num = 35;

  }
  reset() {
    console.log(this.num);

    this.num = 0;
  }
  setNum(value) {
    this.num = value;
  }
  ngOnInit() {
  }

}
