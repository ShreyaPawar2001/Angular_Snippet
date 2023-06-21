import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferDataService } from '../transfer-data.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  uName!:string;
  list:any;
  StudentData:any;
 constructor(private router : Router, private transferDataService:TransferDataService){

 }
 
 ngOnInit(){
   this.uName = this.transferDataService.userName;
   this.list = this.transferDataService.listOfUsers;
   this.StudentData =this.transferDataService.studentData; //get student data from the service.
  }


  login(){ 
    this.router.navigateByUrl('/login');
  }
  studentActivity(){
    this.router.navigateByUrl('student/studentActivity');
  }
  directives(){
    this.router.navigateByUrl('directives');
  }



}
 