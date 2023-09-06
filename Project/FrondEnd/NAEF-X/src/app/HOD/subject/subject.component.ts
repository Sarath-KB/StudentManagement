import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private service:HodServiceService, private rout:Router) { }

  did:any
  readdata1:any
  readdata2:any

  ngOnInit(): void {
    this.did=localStorage.getItem('dept_id')
    this.service.getSemester(this.did).subscribe((res)=>{
      this.readdata1=res.data;
    })
    this.service.getFacultydata(this.did).subscribe((res)=>{
      this.readdata2=res.data;
    })
  }

  subjectform = new FormGroup({
    subjectname: new FormControl('',Validators.required),
    semestername: new FormControl('',Validators.required),
    facultyname: new FormControl('',Validators.required)
  })

  registersubject(){
    if(this.subjectform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.subjectform.value.subjectname.match(nameexp)){
        this.service.createSubjectdata(this.subjectform.value).subscribe((res)=>{
          alert("Subject Added")
          this.rout.navigateByUrl('/HOD/viewsubject')
        });
      }
      else{
        alert("Enter a valid subject name")
      }
    }
    else
    {
      alert('All Fields Required')
    }
  }

}
