import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent {

  selectedValue: string=''

  selectCountry:string=""

  cities=[
    { city:"Thane"},
    { city:"Kalyan"},
    { city:"dadar"},
    { city:"Ambarnath"},
    { city:"Ulhasnagar"},
    { city:" Pune"},
    { city:"Nashik"},
    
  ]

  countries=[
    { country:"India"},
    { country:"Pakistan"},
    { country:"bangladesh"},
    { country:"USA"},
    { country:"Australia"},
    
    
  ]
}
