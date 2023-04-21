import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFiller = false;
  value=''
  username:string=''
  password: string=''


  constructor(public dialog: MatDialog){}

 
  sidenav(){

 }

 toppings = new FormControl('');

  toppingList: string[] = ['Peru','Philippines','Poland', 'Portugal', ' Republic of the Congo',
'Reunion', 'Romania', 'Scotland','Russia' ];


openDialog(){

  const dialogRef = this.dialog.open(LoginComponent, {
    data: {username: this.username, password: this.password},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.username = result;
    this.password = result;
  });
}

  openDialog1(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ChildComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

}

}


