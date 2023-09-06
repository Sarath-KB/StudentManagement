import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  readdata:any

  ngOnInit(): void {
    this.service.getClassdata().subscribe((res)=>{
      this.readdata=res.data;
    })
  }

  semesterform = new FormGroup({
    semestername:new FormControl('',Validators.required),
    classname:new FormControl('',Validators.required)
  })

  semestersubmit(){
    if(this.semesterform.valid){
      var nameexp = /^([A-Z0-9]){2}$/;
      if(this.semesterform.value.semestername.match(nameexp)){
        this.service.createSemesterdata(this.semesterform.value).subscribe((res)=>{
          alert('Semester Registered Successfully.')
          this.semesterform.reset();
          this.rout.navigateByUrl('/Admin/semesterview')
        })
      }
      else{
        alert("Please Enter A Valid Semester Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
