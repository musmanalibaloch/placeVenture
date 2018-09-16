import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = {};

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
  }

  loginData(f){
    this.api.post(environment.userLogin,this.login).subscribe((res:any)=>{
      console.log('login data ===>',res);
      if(res.user.status === 1){
        console.log('login data inside ===>',res);
        this.router.navigate['/reviewpost'];
      }
      else{
        console.log('You can not login, There is some Error!'); 
      }
    })
  }

}
