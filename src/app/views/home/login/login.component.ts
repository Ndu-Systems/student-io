import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/service/account.service";
import { User } from "src/app/model/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  ngOnInit() {}
}
