import {  AuthService } from './../_services/auth.service';
import { Output, Component, EventEmitter, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

 // @Input() valuesfromHome: any;

  //step1
  @Output() cancelRegister = new EventEmitter(); //step2 emitter
  constructor(private authService: AuthService) {
    
   }

  ngOnInit() {
  }

  Register() {

    this.authService.register(this.model).subscribe(()=>{
      console.log('Registration Successfull');
    },
    error=>{
      console.log('Error')
    }
  )
    console.log(this.model);
  }
  cancel() {
    this.cancelRegister.emit(); //step 3 emitt the value
    console.log("cancelled")
  }

}
