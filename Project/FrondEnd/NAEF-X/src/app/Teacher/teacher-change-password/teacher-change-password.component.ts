import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-change-password',
  templateUrl: './teacher-change-password.component.html',
  styleUrls: ['./teacher-change-password.component.css']
})
export class TeacherChangePasswordComponent implements OnInit {

  constructor(private service:TeacherServiceService, private rout:Router) { }

  t_id:any
  current_password:any

  ngOnInit(): void {
    this.t_id=localStorage.getItem('t_id')
    this.service.getMydata(this.t_id).subscribe((res) => {
      this.current_password=res.data[0].faculty_password
    })
  }

  changepasswordform = new FormGroup({
    oldpassword: new FormControl('',Validators.required),
    newpassword: new FormControl('',Validators.required),
    confirmnewpassword: new FormControl('',Validators.required)
  })

  Changepassword(){
    if(this.changepasswordform.valid){
        if(this.changepasswordform.value.oldpassword==this.current_password){
          if(this.changepasswordform.value.newpassword==this.changepasswordform.value.confirmnewpassword){
            if(this.changepasswordform.value.newpassword!=this.current_password){
              this.service.changePassword(this.changepasswordform.value,this.t_id).subscribe((res) => {
                alert("Password Changed Successfully")
                this.rout.navigateByUrl('/Teacher')
              })
            }
            else{
              alert("Old password and New Passwords are same")
            }
          }
          else{
            alert("Please provide correct password in confirm password")
          }
        }
        else{
          alert("Password is Wrong... Try Again...")
        }
    }
  }

}
