import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  constructor(private service:HodServiceService, private router:ActivatedRoute, private rout:Router) { }

  getId:any
  did:any
  readdata1:any
  readdata2:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getClasssingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.classupdateform.patchValue({
          classname:res.data[0].class_name,
          batchname: res.data[0].batch_id,
          facultyname: res.data[0].faculty_id
        })
        console.log(this.classupdateform.value)
      })
    }
    this.did=localStorage.getItem('dept_id')
    console.log(this.did)
    this.service.getBatchdata(this.did).subscribe((res)=>{
      this.readdata1=res.data;
    })
    this.service.getFacultydata(this.did).subscribe((res)=>{
      this.readdata2=res.data;
    })
  }

  classupdateform = new FormGroup({
    classname: new FormControl('',Validators.required),
    batchname: new FormControl('',Validators.required),
    facultyname: new FormControl('',Validators.required)
  })

  updateclass(){
    console.log(this.classupdateform.value,'updatedform');
    if(this.classupdateform.valid)
    {
      var nameexp = /^([A-Za-z ])$/;
      if(this.classupdateform.value.classname.match(nameexp)){
        this.service.updateClassdata(this.classupdateform.value,this.getId).subscribe((res)=>{
          alert('Class Edited Successfully')
          this.rout.navigateByUrl('/HOD/viewclass')
        });
      }
      else{
        alert("Enter a Valid Class Name")
      }
    }
    else
    {
      alert('All Fields Required')
    }
  }

}
