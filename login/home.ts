import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubpagePage } from '../subpage/subpage';
import { NavParams } from 'ionic-angular';

import { HttpModule,JsonpModule } from "@angular/http";
import { Http,Jsonp,Headers } from "@angular/http";  

import { Observable } from "rxjs";
import "rxjs/Rx";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(  public navCtrl: NavController,public http:Http,public jsonp:Jsonp,public alertCtrl: AlertController ) {

  }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
   log='';
   pas='';
   showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '登录',
      message: "用户名不存在或者用户名和密码不相符",
   
      buttons: ["关闭"]
    });
     prompt.present();
  }

 logg(){
  this.http.post( 'http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({status:'login',userID:this.log,password:this.pas}), {headers:this.headers} ).filter(data=>{
    return data.status === 200;
  }).map(data=>data.json()).subscribe( 
   data=>{ 
              
               window.location.href = "../hello/hello.html";
         
          
           },err=>{
            this.showPrompt();
     });

}




  }







	 
       	 
 
 	

      		
	


 
  
 



