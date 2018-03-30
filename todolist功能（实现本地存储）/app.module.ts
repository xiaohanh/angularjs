import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


 import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { TodolistComponent } from './components/todolist/todolist.component';

// 注入服务
import { TodolistService} from './services/todolist.service';

@NgModule({
  // 声明组件
  declarations: [
    AppComponent,

    TodolistComponent,
  ],
 
  // 声明模块
  imports: [ BrowserModule, FormsModule ],
  // 声明服务
  providers: [TodolistService],
  // 声明存储加载
  bootstrap: [AppComponent]

})
export class AppModule { }
