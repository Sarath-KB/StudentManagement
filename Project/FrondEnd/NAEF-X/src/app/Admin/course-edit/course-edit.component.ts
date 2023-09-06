import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute ,private rout:Router) { }

  readdata1:any
  readdata2:any
  getId:any

  ngOnInit(): void {

    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getCoursesingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.courseupdateform.patchValue({
          coursename:res.data[0].course_name,
          courseabbriviation: res.data[0].course_abbreviation,
          coursetype: res.data[0].course_type_id,
          deptname: res.data[0].dept_id
        })
        console.log(this.courseupdateform.value)
      })
    }

    this.service.getCoursetypedata().subscribe((res)=>{
      this.readdata1=res.data
    })

    this.service.getDeptdata().subscribe((res)=>{
      this.readdata2=res.data
    })

  }

  courseupdateform = new FormGroup({
    coursename:new FormControl('',Validators.required),
    courseabbriviation:new FormControl('',Validators.required),
    coursetype:new FormControl('',Validators.required),
    deptname:new FormControl('',Validators.required)
  })

  courseupdate(){
    console.log(this.courseupdateform.value,'updatedform');
    if(this.courseupdateform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.courseupdateform.value.coursename.match(nameexp)){
        if(this.courseupdateform.value.courseabbriviation.match(nameexp)){
          this.service.updateCoursedata(this.courseupdateform.value,this.getId).subscribe((res)=>{
            alert("Details Updated Successfully");
            this.rout.navigateByUrl('/Admin/courseview')
          });
        }
        else{
          alert("Please Enter A Valid Course Abbriation")
        }
      }
      else{
        alert("Please Enter A Valid Course Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
