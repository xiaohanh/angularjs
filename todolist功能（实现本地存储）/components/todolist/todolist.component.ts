import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
//引入服务
import { TodolistService} from '../../services/todolist.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
//在构造函数中进行声明
  constructor(public getData:TodolistService) { }


  @Input()  arrData1:Array<any>;

  @Output() getIndex=new EventEmitter();

  ngOnInit() {
    //调用服务
  

        //存
      this.getData.set("firstpos", this.arrData1);
     
      
      //取
      this.getData.get("firstpos");
    
       
  }
  aa;

   comlist = [];
   bb=0;
  delData(i){
    this.arrData1.splice(i,1);
   this.aa=this.arrData1.length;
  }
  change(i){
  
    this.comlist.push(this.arrData1[i])
    this.arrData1.splice(i,1);
    this.bb= this.comlist.length;
    this.aa=this.arrData1.length;
  }
  delData2(i){
    this.comlist.splice(i,1);
    this.bb= this.comlist.length;
    
  }
  change2(i){
   
    this.arrData1.push(this.comlist[i])
    this.comlist.splice(i,1);
    this.aa=this.arrData1.length;
    this.bb= this.comlist.length;
  }


  fn(i){
    //将下标抛出去
    this.getIndex.emit(i);
  }


}

