import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() item:{id_tach:number,tach:string,checked:boolean}={"id_tach":-1,"tach":"","checked":false};
  @Output() change =new EventEmitter<{id_tach:number,tach:string,checked:boolean}>()
  @Output() delet = new EventEmitter<{id_tach:number,tach:string,checked:boolean}>()
  constructor() {}

  ngOnInit(): void {
  }
  
  done(){
    this.change.emit(this.item);
  }

  suprim(){
    this.delet.emit(this.item);
  }
}
