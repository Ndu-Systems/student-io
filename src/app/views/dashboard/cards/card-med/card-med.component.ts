import { Component, OnInit } from '@angular/core';
import { Recents } from 'src/app/models/resents.model';

@Component({
  selector: 'app-card-med',
  templateUrl: './card-med.component.html',
  styleUrls: ['./card-med.component.scss']
})
export class CardMedComponent implements OnInit {
  heading="Recently registered";
  count="305";
  image="group-rkP1DGAWN.svg";
  items:Array<Recents> = [
    {
      discription:'Nomfundo Masbongo',
      value_1:'IT:AI',
      value_2:'2h13 ago'
    },
    {
      discription:'John Doe',
      value_1:'IT:AI',
      value_2:'2days'
    },
    {
      discription:'Cindy Smith',
      value_1:'IT:AI',
      value_2:'R5000.00'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}


