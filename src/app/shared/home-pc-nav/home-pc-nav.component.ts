import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pc-nav',
  templateUrl: './home-pc-nav.component.html',
  styleUrls: ['./home-pc-nav.component.scss']
})
export class HomePcNavComponent implements OnInit {
  showNv = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNav(){
    this.showNv = !this.showNv
  }
}
