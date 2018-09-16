import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup:any = {};
  account_created:boolean;
  account_Notcreated:boolean;
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
  }

  signupData(f){
    this.api.post(environment.createUsers,this.signup).subscribe((res:any)=>{
      
      if(res.user.email){ 
        console.log('user Signup ==> ',res);
        //show message
        this.account_created = true;
        setTimeout(()=>{
          this.router.navigate(['/login']);
        },2000)
        f.reset();
        }
      else{
        setTimeout(()=>{
          this.account_Notcreated = true;  
        },2000)
        console.log('user not created!');
      }
    })
  }

}
