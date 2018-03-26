import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }
  @Input()  arrData1:Array<any>;

  @Output() getIndex=new EventEmitter();

  ngOnInit() {
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

