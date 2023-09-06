import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  readdata:any
  readdata4:any
  id:any
  id2:any
  username:any
  name:any
  readdata3:any

  ngOnInit(): void {
    this.service.getClassdata().subscribe((res)=>{
    this.readdata=res.data;
    })
    this.service.getDistrictdata().subscribe((res)=>{
      this.readdata4=res.data
      console.log(this.readdata4)
    })
  }

  studentform = new FormGroup({
    studentname:new FormControl('',Validators.required),
    classname:new FormControl('',Validators.required),
    studentemail:new FormControl('',Validators.required),
    studentusername:new FormControl('',Validators.required),
    studentpassword:new FormControl('',Validators.required),
    studdist:new FormControl('',Validators.required),
    studplace:new FormControl('',Validators.required)
  })

  getPlace(e: any) {
    this.id = e.target.value;
    console.log(e.target.value)
    this.service.getplacedata(this.id).subscribe((res) => {
      this.readdata3 = res.data;
    });
  }

  generateusername(){
    this.service.getMaxStudent().subscribe((res)=>{
      this.id2=res.data[0].id
      this.id2=this.id2+1
      this.name=this.studentform.value.studentname.slice(0,3)
      this.username=this.name+this.id2
      this.studentform.patchValue({
        studentusername: this.username
      })
    })
  }

  studentsubmit(){
    if(this.studentform.valid){
      var nameexp=/^([A-Za-z ]*)$/;
      if(this.studentform.value.studentname.match(nameexp)){
        var emailexp=/^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
        if(this.studentform.value.studentemail.match(emailexp)){
          this.service.createStudentdata(this.studentform.value).subscribe((res)=>{
            alert("Student Registered Successfully")
            this.studentform.reset();
            this.rout.navigateByUrl('/Admin/studentview')
          })
        }
        else{
          alert("Enter a valid Email")
        }
      }
      else{
        alert("Enter a valid name")
      }
    }
    else{
      alert("All Fields are Required...!!")
    }
  }

}
