import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public liste:{id_tach:number,tach:string,checked:boolean}[] =[]

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<{id_tach:number,tach:string,checked:boolean}[]>("https://unawed-gangs.000webhostapp.com/liste.php").subscribe((res)=>{
      this.liste=res;
    })
    setInterval(()=>{
      this.http.get<any>("https://unawed-gangs.000webhostapp.com/liste.php").subscribe((res)=>{
        this.liste=res;
      })
    }, 3000);
  }

  check(event:{id_tach:number,tach:string,checked:boolean}){ 
    this.http.post("https://unawed-gangs.000webhostapp.com/Check.php",JSON.stringify(event)).subscribe(()=>{  
      let index = this.liste.indexOf(event)
      if(index!=-1) this.liste[index].checked=event.checked;
    });
  }

  suprim(event:{id_tach:number,tach:string,checked:boolean}){
    this.http.post("https://unawed-gangs.000webhostapp.com/Delet.php",JSON.stringify(event)).subscribe(()=>{  
      let index = this.liste.indexOf(event);
      this.liste.splice(index,1);
    })
  }

  add(event:string){  
    this.http.post<{id_tach:number,tach:string,checked:boolean}>("https://unawed-gangs.000webhostapp.com/AddTach.php",JSON.stringify({'event':event})).subscribe((res)=>{
      this.liste.push(res);
      console.log(JSON.stringify({'event':event}),res)
    })
  }
}
