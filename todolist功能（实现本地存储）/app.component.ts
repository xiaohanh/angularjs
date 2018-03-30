import { Component } from '@angular/core';//引入服务
import { TodolistService} from './services/todolist.service';

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
