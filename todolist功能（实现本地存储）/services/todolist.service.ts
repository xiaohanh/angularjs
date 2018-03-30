import { Injectable } from '@angular/core';


@Injectable()
//暴露出服务的类
export class TodolistService {

  constructor() { }
  // list=[];
  // index:number;
  // getIndex(i){
  //   this.index=i;
  // }
  //向数组中添加数据
//  addData(num:number)
// {
//   this.list.push(num);
// }







  //本地存储数据服务
  //存储
  set(key,value){
    //将对象以字符串保存
   localStorage.setItem(key,JSON.stringify(value));
 }
 //读取
 get(key) {
   localStorage.getItem(key);
  
}




   

}
