import { Component } from '@angular/core';
// 根组件，一个组件只有一个html模板
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:<div></div>
  styleUrls: ['./app.component.css']
 
})


export class AppComponent {
  //插值表达式
title="hello world";
imgsrc="assets/imgs/m1.png";
// 属性绑定
id="box";
// 数据循环
arr=[1,2,3,4];
//声明变量,并且初始化
// str:string='abc';

// 方法二：事件+属性绑定，实现双向数据绑定。
// str:string='abc';
// changeStr(e){
//   this.str=e.target.value;
// }
// 事件绑定
// e是形参
fn(e){
  console.log(e.target.innerHTML);
}
//ngSwitch
fruit:any;
changeFruit(v){
console.log(v);
this.fruit=v;
}

// 双向数据绑定

 txt = '新年快乐';


// todolist
//  tolist = [];
//  comlist = [];
// content = '';
// addData(){
//   this.tolist.push(this.content);
//   // 添加完数据后，清空框内的内容
//   this.content = '';
// }
// keyData(e){
//   // enter键的ASCII是13 
// // 意思是当按下enter键时,获得焦点
//   if(e.keyCode==13){
//     this.tolist.push(this.content);
//     this.content = '';
//   }
// }
// delData(i){
//   this.tolist.splice(i,1);
// }
// change(i){
//   this.comlist.push(this.tolist[i]);
//   this.tolist.splice(i,1);
// }
// delData2(i){
//   this.comlist.splice(i,1);
// }
// change2(i){
//   this.tolist.push(this.comlist[i])
//   this.comlist.splice(i,1);
// }





  // todolist
  idx:number;

  getI(ww){
    this.idx=ww;
  }


 tolist = [];

  content = '';
 addData(){
  this.tolist.push(this.content);
  // 添加完数据后，清空框内的内容
  this.content = '';

}

}
