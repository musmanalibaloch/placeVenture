import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = {};

  constructor(private api:ApiService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.auth.getUser().subscribe((user:any)=>{
        if(user)
        {
          console.log(user);
          this.router.navigate(['/']);
        }
       
    })
  }
  loginData(f){
    this.auth.login(this.login.email,this.login.password).then(user=>{
      this.router.navigate(['/']);
    })
    .catch(err=>{
      console.log(err);
    })
  }

}
