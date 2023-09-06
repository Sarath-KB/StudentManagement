import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hodchange-password',
  templateUrl: './hodchange-password.component.html',
  styleUrls: ['./hodchange-password.component.css']
})
export class HODChangePasswordComponent implements OnInit {

  constructor(private service:HodServiceService, private rout:Router) { }

  hod_id:any
  current_password:any

  ngOnInit(): void {
    this.hod_id=localStorage.getItem('hod_id')
    this.service.getMydata(this.hod_id).subscribe((res) => {
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
              this.service.changePassword(this.changepasswordform.value,this.hod_id).subscribe((res) => {
                alert("Password Changed Successfully")
                this.rout.navigateByUrl('/HOD')
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
