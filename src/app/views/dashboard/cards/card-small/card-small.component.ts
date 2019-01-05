import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss']
})
export class CardSmallComponent implements OnInit {
heading="Students";
count="305";
image="group-rkP1DGAWN.svg";
  constructor() { }

  ngOnInit() {
  }

}
