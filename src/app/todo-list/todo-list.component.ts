import { Component } from '@angular/core';
import { TodoItem, TODO_ITEMS } from '../mocked-data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
newItem: string ="Nowy element";
todoItem: TodoItem[]=TODO_ITEMS;

addItem():void{
  this.todoItem.push({text:this.newItem});
  this.newItem="";
}
removeItem(event: TodoItem):void{
  this.todoItem=this.todoItem.filter(item =>item.text!== event.text);
}
sortItem(){
 this.todoItem.sort((a,b)=>a.text.localeCompare(b.text))


}

}
