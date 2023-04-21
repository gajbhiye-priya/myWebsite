import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-task',
  templateUrl: './child-task.component.html',
  styleUrls: ['./child-task.component.css']
})
export class ChildTaskComponent {
count:number=0
adminCount:number=0

  @Output() dataTransfer= new EventEmitter<string>
  userData:string=""
  
  admins:any[] = []
 
  firstname = ""
 adminname=''

  createUser(data:any){
    if(data.value.length>0){
      this.count=this.count+1
this.dataTransfer.emit(data.value)

    // this.users.push({
    //   firstname:data.value
    // })
    }
    
  }

  createAdmin(payload:any){

    if(payload.value.length>0){

      this.adminCount=this.adminCount+1
      this.admins.push({
      adminname:payload.value
      
      })
      
    }

  }

}
