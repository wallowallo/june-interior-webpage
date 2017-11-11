import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor() { }

  scrollToAboutMe() {
    document.body.scrollTop = 760; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 760; // For IE and Firefox
  }

  scrollToStyling() {
    document.body.scrollTop = 1487; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 1487; // For IE and Firefox
  }

  scrollToEmail() {
    document.body.scrollTop = 2250; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 2250; // For IE and Firefox
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
