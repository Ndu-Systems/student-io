import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-courses',
  templateUrl: './card-courses.component.html',
  styleUrls: ['./card-courses.component.scss']
})
export class CardCoursesComponent implements OnInit {
  heading="Students";
  count="305";
  image="group-rkP1DGAWN.svg";
  constructor() { }

  ngOnInit() {
  }

}
