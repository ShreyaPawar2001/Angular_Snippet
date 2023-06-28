import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {
  sigInForm!: FormGroup;
  showSignInForm : boolean = false;
  passwordValue : any;
  confirmPassValue : any;
  isMatch! : boolean
  studentvalue1:any;

  constructor(private fb: FormBuilder, 
    private dataServiceService : DataServiceService){}

  showForm(){
     this.showSignInForm = true;
     this.formDef();
  }

  formDef(){

    this.sigInForm = this.fb.group({
      password:[],
      confirmPassword:[]
     })

  }

  password() {

    this.passwordValue = this.sigInForm.value.password;
    if (this.passwordValue == this.confirmPassValue) {
      this.isMatch = true;
    }
    else {
      this.isMatch = false;
    }
  }

  confirmPassword() {
    this.confirmPassValue = this.sigInForm.value.confirmPassword;
    if (this.passwordValue == this.confirmPassValue) {
      this.isMatch = true;
    }
    else {
      this.isMatch = false;
    }
  }
  getData(){
    this.studentvalue1= this.dataServiceService.studentData
    console.log('studentData',this.studentvalue1);
    let x = this.dataServiceService.test(40,50)
    console.log();
     
    

  }

}
