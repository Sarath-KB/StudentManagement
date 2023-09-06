import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestServiceService } from '../guest-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private service:GuestServiceService, private rout:Router) { }

  ngOnInit(): void {
  }

  username:any
  password:any
  flag:any=0
  admin_id:any

  adminloginform = new FormGroup({
    'adminusername':new FormControl('',Validators.required),
    'adminpassword':new FormControl('',Validators.required),
  })

  adminLogin(){
    if(this.adminloginform.valid)
    {
      console.log(this.adminloginform.value)
      this.username=this.adminloginform.value.adminusername
      this.password=this.adminloginform.value.adminpassword
      this.service.adminLogin().subscribe((res)=>{
        console.log(res,'res==>');
        console.log(res.data.length)
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].admin_username==this.username && res.data[i].admin_password==this.password)
          {
            this.rout.navigateByUrl('/Admin')
            this.flag=1;
            this.admin_id=res.data[0].admin_id
            localStorage.setItem('admin_id',this.admin_id)
          }
        }
        if(this.flag===0)
          {
            alert('Invalid Username or Password')
          }
      })
    }
    else
    {
      console.log('All Fields Required')
    }

  }

}
