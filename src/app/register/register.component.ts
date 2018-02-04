
      import {  AuthService } from './../_services/auth.service';
      import { Output, Component, EventEmitter, OnInit, Input } from '@angular/core';
      import { Http } from '@angular/http';
      import { error } from 'selenium-webdriver';
      import { AlertifyService } from '../_services/alertify.service';




      @Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
      })
      export class RegisterComponent implements OnInit {

        model: any = {};

      // @Input() valuesfromHome: any;

        //step1
        @Output() registerModeemit=new EventEmitter();
        constructor(private authService: AuthService, private alertifyService: AlertifyService ) {
          
        }

        ngOnInit() {
        }

        Register() {
            this.authService.register(this.model).subscribe(()=>{
            this.alertifyService.success('Registration Successfull');
            this.model.username='';
            this.model.pasword='';
          },
          error=>{
            this.alertifyService.error(error);
          });
        }

        cancel(){
                   this.registerModeemit.emit(false);
        }
        

      }
