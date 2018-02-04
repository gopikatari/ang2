import { Injectable } from '@angular/core';

declare let alertify:any;
@Injectable()
export class AlertifyService {

    
constructor() { }

confirm(message: string, okcallback: ()=> any)
                {
                   alertify.confirm(message, function(e)
                   {
                       if(e){
                        okcallback();
                       }else{}
                   });   
                }

    success(message: string){
        alertify.success(message);
    }


    warning(message: string){
        alertify.warning(message);
    }

    error(message: string){
        alertify.error(message);
    }
    message(message: string){
        alertify.message(message);
    }
    
    
}