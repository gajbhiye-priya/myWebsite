import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  users: any[] = []
  firstname = ""

  public products = [{ productId: 1, productName: "Laptop", price: "200", color: "Red" },
  { productId: 2, productName: "TV", price: "2000", color: "Green" },
  { productId: 3, productName: "Mobile", price: "4000", color: "Yellow" },
  { productId: 4, productName: "Washing Machin", price: "5000", color: "Blue" }

  ]
  isValid: boolean = false;
  show: string = ""
  resultt: string = ''

  public selector: string = ''

  display: string = ''

  ngOnInit(): void {

  }

  message = " add to cart succesfully"
  result = ""
  onClick() {
    this.result = this.message
  }

  //   myEvent(event:any){
  // console.log(event.target.value)
  // this.resultt=event.target.value

  //   }

  onAddtocart(event: any) {

    this.display = event.target.value + " " + "Added to add to cart";
    console.log("event value", event.target.value);
  }

  clickmee() {
    this.isValid = true;
    this.show = "I am using ngIf in angular"
  }

  getProduct(val: any) {
    console.log(val.target.value)
    this.selector = val.target.value
    console.log("selector", this.selector)

  }

  create(uname: any) {
    this.users.push({
      firstname: uname.value
    } );
  }

  remove(){

    this.users.splice(this.users.length-1)

  }

  removeItem(item:any){
this.users.splice(item,1)
  }

}
