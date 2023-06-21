import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { TransferDataService } from '../transfer-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm! : FormGroup ;
   //name:string = 'poonam';
   //name!:string;
   student = {
    name: 'poonam',
    mob:3457890123,
    city:'Satara',
    age:30
   }
 constructor(private formBuilder : FormBuilder, private transferDataService:TransferDataService,
   private router:Router){

 }
    ngOnInit(){
      
      this.signUpFormControlls();
      this.transferDataService.studentData =this.student
    }

    signUpFormControlls(){
      this.signUpForm = this.formBuilder.group({
        name : ['',[Validators.required,Validators.pattern("[a-zA-Z]*$"),Validators.minLength(10)]],
        email : [''],
        contact: [''],
        address:[''],
        gender:['male']
      })
    }
    submit(){
      console.log(this.signUpForm.value);
      this.transferDataService.userName =this.signUpForm.value.name;
      this.router.navigateByUrl('landing')
      this.transferDataService.listOfUsers =['poonam','pooja','nitin','shreya']
      

    }

}
