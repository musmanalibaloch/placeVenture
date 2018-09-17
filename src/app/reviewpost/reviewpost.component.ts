import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reviewpost',
  templateUrl: './reviewpost.component.html',
  styleUrls: ['./reviewpost.component.css']
})
export class ReviewpostComponent implements OnInit {
  userDisplay: string;
  isLoggedIn: boolean;
  items:any;
  constructor(private auth: AuthService, private route: Router,private db: AngularFirestore) {
    this.isLoggedIn = false;
    this.userDisplay = "";
  }

  ngOnInit() {
    this.auth.getUser().subscribe((user: any) => {
      if (user) {
        this.isLoggedIn=!this.isLoggedIn;
        console.log(typeof user.email);
        this.userDisplay = user.email;
        console.log(this.userDisplay);
      }
      else {
        this.isLoggedIn = false;
      }
    })

     this.db.collection('placesMeta',ref => ref.limit(10)).valueChanges().subscribe(data=>{
        this.items=data;
        console.log(this.items);
     });
    
  }
  logout()
  {
    this.auth.logout();
  }
  login()
  {
    this.route.navigate(['/login']);
  }

}
