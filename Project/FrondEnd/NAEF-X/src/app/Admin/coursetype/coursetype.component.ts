import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-coursetype',
  templateUrl: './coursetype.component.html',
  styleUrls: ['./coursetype.component.css']
})
export class CoursetypeComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  ngOnInit(): void {
  }

  coursetypeform = new FormGroup({
    coursetype:new FormControl('',Validators.required)
  })

  coursetypesubmit(){
    if(this.coursetypeform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.coursetypeform.value.coursetype.match(nameexp)){
        this.service.createCoursetypedata(this.coursetypeform.value).subscribe((res)=>{
          alert("Course Type Registered Successfully")
          this.coursetypeform.reset();
          this.rout.navigateByUrl('/Admin/coursetypeview')
        })
      }
      else{
        alert("Please Enter A Valid Course Type")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
