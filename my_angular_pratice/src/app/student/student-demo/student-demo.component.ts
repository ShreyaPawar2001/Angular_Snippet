import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {
  studentvalue={
    name1:'Shreya',
    age:23,
    class: 'lastYear'

  }

  constructor(private router : Router,
    private dataServiceService : DataServiceService){

  }

  back(){
     this.router.navigateByUrl('landing')
  }
  setData(){
    this.studentvalue= this.dataServiceService.studentData 
    // console.log("service's property >>",this.dataServiceService.studentData);

  }
  serviceFun(){
    let res= this.dataServiceService.test(20,30)
    console.log(res,'res');
    
  }
}
