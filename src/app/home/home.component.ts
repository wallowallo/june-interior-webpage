import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var emailjs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor() {}

  send(form: NgForm) {
    const subject = form.value.subject;
    const text = form.value.message;
    const service_id = "default_service";
    const template_id = "template_Ass4sDXO";
    const params = {
     subject: subject,
     message: text
    }
    emailjs.send(service_id, template_id, params)
     .then(function(){
        alert("Sent!");
      }, function(err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
     });
    form.reset();
  }
}
