import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  routeToInsta() {
    window.open('https://www.instagram.com/junehaugland/?hl=en', '_blank');
  }

  routeToFacebook() {

  }

  routeToLinkedIn() {
    window.open('https://www.linkedin.com/in/june-therès-m-haugland-73097279', '_blank');
  }

}
