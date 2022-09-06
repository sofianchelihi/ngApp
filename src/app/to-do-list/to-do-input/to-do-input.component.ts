import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit {
  public tach:string='';
  @Output() add = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  
  addTach(){
    this.add.emit(this.tach);  
    this.tach="";
  }



}
