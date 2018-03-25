import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router'; 
import { HttpModule,JsonpModule } from "@angular/http";
import { Http,Jsonp,Headers } from "@angular/http";  
import { Observable } from "rxjs";
 import "rxjs/Rx";

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  // constructor(public router:Router) { 

  // }
   constructor( public http:Http,public jsonp:Jsonp ,public router:Router){  }
   headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  // @Input() list:Array<any>;
  list:number[]=[1,2,3,4,5];
  ngOnInit() {
    //  this.list=[1,2,3,4];
     //拿数据：data后面的就是返回来的。
  //   this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
  //     console.log(JSON.parse(data['_body']));
     
    
  //   this.list=JSON.parse(data['_body']);
  // },err=>{
  //   console.log(err);
  // });


  this.jsonp.get( ' http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 
          console.log((data['_body']));
     
    
          this.list=(data['_body']);
      },err=>{
           console.log(err);
});


// 方法一：
//  this.http.post( 'http://datainfo.duapp.com/shopdata/getclass.php',JSON.stringify({}), {headers:this.headers} ).filter(data=>{
//    return data.status === 200;
//  }).map(data=>data.json()).subscribe( 
//   data=>{ 
//               console.log(data);
         
        
         
//           },err=>{
//                console.log(err);
//     });
 

// 方法二：
//  this.http.post( 'http://datainfo.duapp.com/shopdata/getClass.php',JSON.stringify({}), {headers:this.headers} ).subscribe( 
//   data=>{ 
//               console.log(JSON.parse(data['_body']));
         
        
//               this.list=JSON.parse(data['_body']);
//           },err=>{
//                console.log(err);
//     });


}

   goDetail(idx){

  //  this.router.navigate(['/gooddetial',idx],{queryParams:{num:101}});
  this.router.navigate(['/gooddetail',idx]);
  }
}

 