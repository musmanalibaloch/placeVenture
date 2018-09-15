import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  uploaded_img:any;

  constructor() {
   }

  ngOnInit() {
  }

  uploaded_newPhoto(event) {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => this.uploaded_img = reader.result;
        reader.readAsDataURL(file);
    }
}
}
