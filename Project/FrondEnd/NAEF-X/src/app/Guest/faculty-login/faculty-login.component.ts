import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestServiceService } from '../guest-service.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {

  constructor(private service:GuestServiceService, private rout:Router) { }

  ngOnInit(): void {
  }

  username:any
  password:any
  flag:any=0
  fid:any
  did:any

  facultyloginform = new FormGroup({
    'facultyusername':new FormControl('',Validators.required),
    'facultypassword':new FormControl('',Validators.required),
  })

  facultylogin(){
    if(this.facultyloginform.valid)
    {
      this.username=this.facultyloginform.value.facultyusername
      this.password=this.facultyloginform.value.facultypassword
      this.service.facultyLogin().subscribe((res)=>{
        console.log(res,'res==>');
        console.log(res.data.length)
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].faculty_username==this.username && res.data[i].faculty_password==this.password)
          {
            this.fid=res.data[i].faculty_id
              this.did=res.data[i].dept_id
              localStorage.setItem("t_id",this.fid)
              localStorage.setItem("dept_id",this.did)
            this.rout.navigateByUrl('/Teacher')
            this.flag=1;
          }
        }
        if(this.flag===0)
          {
            console.log('Invalid Username or Password')
          }
      })
    }
    else
    {
      console.log('All Fields Required')
    }
  }

  hodloginform = new FormGroup({
    'hodusername':new FormControl('',Validators.required),
    'hodpassword':new FormControl('',Validators.required),
  })

  hodlogin(){
    if(this.hodloginform.valid)
    {
      this.username=this.hodloginform.value.hodusername
      this.password=this.hodloginform.value.hodpassword
      this.service.facultyLogin().subscribe((res)=>{
        console.log(res,'res==>');
        console.log(res.data.length)
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].faculty_username==this.username && res.data[i].faculty_password==this.password)
          {
            if(res.data[i].designation_title==='HOD'){
              this.fid=res.data[i].faculty_id
              this.did=res.data[i].dept_id
              localStorage.setItem("hod_id",this.fid)
              localStorage.setItem("dept_id",this.did)
              let gid = localStorage.getItem("hod_id")
              console.log(gid)
              this.rout.navigateByUrl('/HOD')
              this.flag=1;
            }
            else{
              this.flag=2;
            }
          }
        }
        if(this.flag===0)
          {
            console.log('Invalid Username or Password')
          }
        if(this.flag===2)
          {
            console.log('You are not permitted to login as HOD')
          }
      })
    }
    else
    {
      console.log('All Fields Required')
    }
  }

}
