import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/service/account.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "malesuada.vel.venenatis@loremeget.com";
  password ="OHL83WJC0ND";

  user : User = { Email : this.email, Password : this.password};

  constructor(private accountService : AccountService) { 
this.accountService.Login(this.user).subscribe(res => {
  console.log(res);
  
})

  }

  ngOnInit() {
  }


}
