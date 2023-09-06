import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-semester-edit',
  templateUrl: './semester-edit.component.html',
  styleUrls: ['./semester-edit.component.css']
})
export class SemesterEditComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute, private rout:Router) { }

  readdata:any
  getId:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getSemestersingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.semesterupdateform.patchValue({
          semestername:res.data[0].semester_name,
          classname:res.data[0].class_id
        })
        console.log(this.semesterupdateform.value)
      })
    }
    this.service.getClassdata().subscribe((res)=>{
      this.readdata=res.data;
    })
  }

  semesterupdateform = new FormGroup({
    semestername:new FormControl('',Validators.required),
    classname:new FormControl('',Validators.required)
  })

  updatesemester(){
    console.log(this.semesterupdateform.value,'updatedform');
    if(this.semesterupdateform.valid)
    {
      var nameexp = /^([A-Z0-9]){2}$/;
      if(this.semesterupdateform.value.semestername.match(nameexp)){
        this.service.updateSemesterdata(this.semesterupdateform.value,this.getId).subscribe((res)=>{
          alert("Details Updated Successfully");
          this.rout.navigateByUrl('/Admin/semesterview')
        });
      }
      else{
        alert("Enter A Valid Semester Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
