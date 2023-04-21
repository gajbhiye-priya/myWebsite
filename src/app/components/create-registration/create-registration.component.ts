import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserRegistrationService } from 'src/app/services/user-registration.service';


@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit {

  public packages=['Monthly', 'Quartly', 'Yeraly'];
  public importnatList=['Toxic Fat Reduction',  'Energy and Endurance',  'Building lean Muscle',   'Sugar craving Body', 'Fitness']
         
  createForm:any=[]

                     
  ngOnInit(): void {
    

  }
  constructor(private register:UserRegistrationService, private router:Router , private toast:NgToastService){                
                 
                    
    this.createForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      contactNumber: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      bmi: new FormControl(''),
      bmiResult: new FormControl(''),
      gender: new FormControl(''),
      requireTrainer: new FormControl(''),
      package: new FormControl(''),
      important: new FormControl(''),
      haveGymBefore: new FormControl(''),
      enquiryDate: new FormControl(''),
      
    });

    this.createForm.controls['height'].valueChanges.subscribe((res:any)=>{

      this.calculateBmi(res)
    })

}

submit(){

  this.register.addRegi(this.createForm.value).subscribe((result)=>{
    console.log("show registration", result)
    this.toast.success({detail:"SUCCESS", summary:"enquiry added", duration:3000});
    this.createForm.reset()
    // this.router.navigate(['/registration-list'])
  } )
}

calculateBmi(heightValue:number){
const weight=this.createForm.value.height;
const height=heightValue;
const bmi=weight/(height*height)

this.createForm.controls['bmi'].patchValue(bmi);
switch(true){
case bmi< 18.5:
  this.createForm.controls['bmiResult'].patchValue('underweight')
  break;

  case (bmi>= 18.5 && bmi< 25):
  this.createForm.controls['bmiResult'].patchValue('Normal')
  break;

  case (bmi>= 25 && bmi< 30):
  this.createForm.controls['bmiResult'].patchValue('overweight')
  break;
  default:
    this.createForm.controls['bmiResult'].patchValue('observe')
    break;
}


}


}


