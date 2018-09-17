/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from "../services/api.service";
import { MapsAPILoader } from '@agm/core';
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  
  //angular google map properties
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  placeholderName : any;
  uploaded_img:any;
  reviews:string;
  cityName:string;
  formData:FormData=new FormData();
  post_data:boolean;
  posting:boolean;
<<<<<<< HEAD
  userDisplay: string;
  isLoggedIn: boolean;
=======
  notPosting:boolean;
>>>>>>> b4fd695bf524ab04bde75d4bffd70fb6a3c9d676
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private router:Router ,private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,private api:ApiService,private auth:AuthService) {
    this.placeholderName="";
  }

  ngOnInit() {
    
    //set google maps defaults
    // this.zoom = 4;
    this.latitude = 0;
    this.longitude = 0;

     //create search FormControl
     this.searchControl = new FormControl();

    
      //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      console.log(this.searchElementRef.nativeElement.value);
      
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                                                      
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.cityName = place.vicinity;
          // this.zoom = 12;
        });
      });
    });

    this.auth.getUser().subscribe((user:any)=>{
      console.log(user);
      if(user)
      {
        if (user) {
          this.isLoggedIn=!this.isLoggedIn;
          console.log(typeof user.email);
          this.userDisplay = user.email;
          console.log(this.userDisplay);
        }
        else {
          this.isLoggedIn = false;
        }
      }
      else
      {
        this.router.navigate(['/login ']);
      }
     })
  }

   setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => 
      {
        
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.translateLatLongToAddress(this.latitude,this.longitude);


        // this.zoom = 12;
      });
    }
  }
  translateLatLongToAddress(lat,lng)
  {
    let geocoder = new google.maps.Geocoder();
    let latlng={lat:lat,lng:lng};
    geocoder.geocode({'location': latlng},(results, status) => {
      if (google.maps.GeocoderStatus.OK) {
        let result = results[0];
        let rsltAdrComponent = result.address_components;
        let resultLength = rsltAdrComponent.length;
        if (result != null) {
          this.placeholderName=result.formatted_address;
          this.searchElementRef.nativeElement.value=result.formatted_address;
           console.log('RESULT',result);
        } else {
          alert("No address available!");
        }
      }
    });
  }

  uploaded_newPhoto(event) {
    if (event.target.files && event.target.files[0]) {
        const uploadPhoto = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => this.uploaded_img = reader.result;
        reader.readAsDataURL(uploadPhoto);
        this.formData.append('file', uploadPhoto);
    }
  };

  isReady(){
    if(this.reviews && this.placeholderName && this.uploaded_img){
      return false;
    }
    return true;
  }
  getLocationValue(location)
  {
    console.log(location);
    this.placeholderName=location;
  }
  createPost(event,value){
    console.log(value);
    this.posting = true;
    this.formData.append('review',this.reviews);
    this.formData.append('time',new Date().toString());
    this.formData.append('lat',this.latitude.toString());
    this.formData.append('long',this.longitude.toString());
    this.formData.append('location',value);
    this.formData.append('city',this.cityName);
    this.reviews = '';
    this.api.post(environment.createPost,this.formData).subscribe((res:any)=>{
      console.log(res);
      if(res.status){
        this.router.navigate(['/reviewpost']);
      }
      else{
        setTimeout(() => {
          this.notPosting = true;
        }, 2000);
      }
    })
    
    console.log('posting...');
  }
};
