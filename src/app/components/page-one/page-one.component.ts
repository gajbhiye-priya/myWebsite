import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {

  firstName: string = ''

  check: any = [
    { value: "Home", completed: false },
    { value: "Services", completed: false },
    { value: "About us", completed: false },
    { value: "Contact us", completed: false }
  ]
  completed: any;

  constructor(private router: Router) { }

  openLink() {

    this.router.navigate(['/page-second'])

  }


  openCheckbox(event: any) {
    // debugger
    if (event) {

      this.check = this.check.map((task: any) => {
        this.completed = true
        return task;
      })
    } else {

      this.check = this.check.map((task: any) => {
        this.completed = false
        return task;
      })
    }

  }



}
