import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent implements OnInit {

  constructor(private service:StudentServiceService, private rout:Router) { }

  stud_id:any
  current_password:any

  ngOnInit(): void {
    this.stud_id=localStorage.getItem('stud_id')
    this.service.getMydata(this.stud_id).subscribe((res) => {
      this.current_password=res.data[0].student_password
    })
  }

  changepasswordform = new FormGroup({
    oldpassword: new FormControl('',Validators.required),
    newpassword: new FormControl('',Validators.required),
    confirmnewpassword: new FormControl('',Validators.required)
  })

  Changepassword(){
    console.log(this.current_password)
    if(this.changepasswordform.valid){
        if(this.changepasswordform.value.oldpassword==this.current_password){
          if(this.changepasswordform.value.newpassword==this.changepasswordform.value.confirmnewpassword){
            if(this.changepasswordform.value.newpassword!=this.current_password){
              this.service.changePassword(this.changepasswordform.value,this.stud_id).subscribe((res) => {
                alert("Password Changed Successfully")
                this.rout.navigateByUrl('/student')
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
