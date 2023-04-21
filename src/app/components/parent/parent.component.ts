import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  isSelected:boolean=false

  selectedProduct:string=""
 addtoCard:any=false

 addCardSelected:string=""


//   public myName:string="Harshada"

//   adultName:string=""

//   addItem(value:string){
  
// console.log("show parent component",value)

//   }

//   parentFunction(data:string){

//      this.adultName=data;
//     console.log("parent function value", data)

//   }

onSelect(product:any){
  this.isSelected=true
  this.selectedProduct= product
}

cardProduct(){
this.addCardSelected=this.selectedProduct

console.log("addCardSelected",this.addCardSelected);

}

}

