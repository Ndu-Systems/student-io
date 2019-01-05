import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-med',
  templateUrl: './card-med.component.html',
  styleUrls: ['./card-med.component.scss']
})
export class CardMedComponent implements OnInit {
  heading="Recently registered";
  count="305";
  image="group-rkP1DGAWN.svg";
  constructor() { }

  ngOnInit() {
  }

}
