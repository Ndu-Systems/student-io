import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ul-items',
  templateUrl: './ul-items.component.html',
  styleUrls: ['./ul-items.component.scss']
})
export class UlItemsComponent implements OnInit {
  showLogin;
  constructor() { }

  ngOnInit() {
  }
  toggleLogin(){
   this.showLogin= !this.showLogin;
   let main = document.getElementById("main-div");
   main.className += " blur";

   if( !this.showLogin)  main.className ="main"
   console.log(main);
   
  }
}
