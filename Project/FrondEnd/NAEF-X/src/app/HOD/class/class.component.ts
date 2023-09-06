import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor(private service:HodServiceService, private rout:Router) { }

  readdata1:any
  readdata2:any
  did:any

  ngOnInit(): void {
    this.did=localStorage.getItem('dept_id')
    console.log(this.did)
    this.service.getBatchdata(this.did).subscribe((res)=>{
      this.readdata1=res.data;
    })
    this.service.getFacultydata(this.did).subscribe((res)=>{
      this.readdata2=res.data;
    })
  }

  classform = new FormGroup({
    classname: new FormControl('',Validators.required),
    batchname: new FormControl('',Validators.required),
    facultyname: new FormControl('',Validators.required),
  })

  classsubmit(){
    console.log(this.classform.value)
    if(this.classform.valid){
      var nameexp = /^([A-Za-z ])$/;
      if(this.classform.value.classname.match(nameexp)){
        this.service.createClassdata(this.classform.value).subscribe((res)=>{
          alert("Class Inserted");
          this.classform.reset();
          this.rout.navigateByUrl('/HOD/viewclass')
        })
      }
      else{
        alert("Enter a Valid Class Name")
      }
    }
    else{
      alert("All Fields are required")
    }
  }

}
