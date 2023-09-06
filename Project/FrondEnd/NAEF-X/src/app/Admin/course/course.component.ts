import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  readdata1:any
  readdata2:any

  ngOnInit(): void {
    this.service.getCoursetypedata().subscribe((res)=>{
      this.readdata1=res.data
    })

    this.service.getDeptdata().subscribe((res)=>{
      this.readdata2=res.data
    })
  }

  courseform = new FormGroup({
    coursename:new FormControl('',Validators.required),
    courseabbriviation:new FormControl('',Validators.required),
    coursetype:new FormControl('',Validators.required),
    deptname:new FormControl('',Validators.required)
  })

  cousesubmit(){
    if(this.courseform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.courseform.value.coursename.match(nameexp)){
        if(this.courseform.value.courseabbriviation.match(nameexp)){
          this.service.createCoursedata(this.courseform.value).subscribe((res)=>{
            console.log("Department Inserted");
            this.courseform.reset();
            this.rout.navigateByUrl('/Admin/courseview')
          })
        }
        else{
          alert("Please Enter a Valid Course Abriviation")
        }
      }
      else{
        alert("Please Enter a Valid Course Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
