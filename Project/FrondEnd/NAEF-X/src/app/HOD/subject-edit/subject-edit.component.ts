import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  constructor(private service:HodServiceService, private router:ActivatedRoute, private rout:Router) { }

  did:any
  getId:any
  readdata1:any
  readdata2:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getSubjectsingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.subjectupdateform.patchValue({
          subjectname:res.data[0].subject_name,
          semestername: res.data[0].semester_id,
          facultyname: res.data[0].faculty_id
        })
        console.log(this.subjectupdateform.value)
      })
    }
    this.did=localStorage.getItem('dept_id')
    this.service.getSemester(this.did).subscribe((res)=>{
      this.readdata1=res.data;
    })
    this.service.getFacultydata(this.did).subscribe((res)=>{
      this.readdata2=res.data;
    })
  }

  subjectupdateform =new FormGroup({
    subjectname: new FormControl('',Validators.required),
    semestername: new FormControl('',Validators.required),
    facultyname: new FormControl('',Validators.required)
  })

  UpdateSubject(){
    console.log(this.subjectupdateform.value,'updatedform');
    if(this.subjectupdateform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.subjectupdateform.value.subjectname.match(nameexp)){
        this.service.updateSubjectdata(this.subjectupdateform.value,this.getId).subscribe((res)=>{
          alert("Subject Added Successfully")
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
