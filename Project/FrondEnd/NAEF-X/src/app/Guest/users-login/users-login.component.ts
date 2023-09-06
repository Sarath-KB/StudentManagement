import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestServiceService } from '../guest-service.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  constructor(private service:GuestServiceService, private rout:Router) { }

  ngOnInit(): void {
  }

  username:any
  password:any
  flag:any
  cid:any
  sid:any
  dept_id:any

  studentloginform = new FormGroup({
    'studentusername':new FormControl('',Validators.required),
    'studentpassword':new FormControl('',Validators.required),
  })

  StudentLogin(){
    if(this.studentloginform.valid)
    {
      this.username=this.studentloginform.value.studentusername
      this.password=this.studentloginform.value.studentpassword
      this.service.Studentlogin().subscribe((res)=>{
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].student_username==this.username && res.data[i].student_password==this.password)
          {
            this.cid=res.data[i].class_id
              this.sid=res.data[i].student_id
              this.dept_id=res.data[i].dept_id
              localStorage.setItem("dept_id",this.dept_id)
              localStorage.setItem("stud_id",this.sid)
              localStorage.setItem("class_id",this.cid)
            this.rout.navigateByUrl('/student')
            this.flag=1;
          }
        }
      })
      if(this.flag==0)
      {
        alert('Invalid Username or Password')
      }
    }
    else
    {
      alert('Please Enter Username and Password')
    }
  }

}
