import { LoginModel } from './../../models/login.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ul-items",
  templateUrl: "./ul-items.component.html",
  styleUrls: ["./ul-items.component.scss"]
})
export class UlItemsComponent implements OnInit {
  showLogin;
  formGroup: FormGroup;
  username: any;
  password: any;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: [this.username, Validators.required],
      password: [this.password, Validators.required]
    });
  }

  ngOnInit() {}
  toggleLogin() {
    this.showLogin = !this.showLogin;
    let main = document.getElementById("main-div");
    main.className += " blur";

    if (!this.showLogin) main.className = "main";
    console.log(main);
  }
  onLogin(data:LoginModel) {
   let username = data.username;
   let password = data.password;
   alert(JSON.stringify(data))
  }
}
