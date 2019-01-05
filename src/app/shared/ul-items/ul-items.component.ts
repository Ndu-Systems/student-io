import { USER_TOKEN } from "./../config";
import { UserToken } from "./../../model/token/token.model";
import { User } from "src/app/model";
import { AccountService } from "src/app/services/service/account.service";
import { LoginModel } from "./../../models/login.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(
    private formBuilder: FormBuilder,
    private acountService: AccountService,
    private router: Router
  ) {
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
  onLogin(user: User) {
    let u: User = {
      Email: "malesuada.vel.venenatis@loremeget.com",
      Password: "OHL83WJC0ND"
    };
    this.acountService.Login(u).subscribe(response => {
      let userResponse: any = response;
      if (!userResponse.value) {
        return false;
      }
      let token = userResponse.value.token;
      localStorage.setItem(USER_TOKEN, JSON.stringify(token));
      this.router.navigate(["dashboard"]);
    });
  }
}
