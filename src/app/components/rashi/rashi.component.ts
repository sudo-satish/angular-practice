import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rashi',
  templateUrl: './rashi.component.html',
  styleUrls: ['./rashi.component.scss']
})
export class RashiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(...args) {
    console.log(args);
  }

}
