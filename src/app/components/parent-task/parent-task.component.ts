import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-task',
  templateUrl: './parent-task.component.html',
  styleUrls: ['./parent-task.component.css']
})
export class ParentTaskComponent {
  users: any[] = []
  

  pushUsers(val:any){

   this.users.push(val)

   
    
  }

}
