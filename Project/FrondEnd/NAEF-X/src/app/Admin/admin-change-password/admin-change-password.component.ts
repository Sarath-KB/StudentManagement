import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  admin_id:any
  current_password:any

  ngOnInit(): void {
    this.admin_id=localStorage.getItem('admin_id')
    this.service.getAdminsingledata(this.admin_id).subscribe((res) => {
      this.current_password=res.data[0].admin_password
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
              this.service.changePassword(this.changepasswordform.value,this.admin_id).subscribe((res) => {
                alert("Password Changed Successfully")
                this.rout.navigateByUrl('/Admin')
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
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
