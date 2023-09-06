import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  imageUrl:any=''
  name:any
  designation:any
  admin_id:any

  ngOnInit(): void {
    this.admin_id=localStorage.getItem('admin_id')
    this.service.getAdminsingledata(this.admin_id).subscribe((res) => {
      this.adminForm.patchValue({
        image: res.data[0].admin_photo,
        email: res.data[0].admin_email
      })
      this.name=res.data[0].admin_name
      this.designation=res.data[0].admin_designation
    });
  }

  adminForm = new FormGroup({
    image: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  })

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (!file) {
      return
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string
    }
    const formData = new FormData();
    formData.append("hodPforile", file);
    this.service.uploadHodProfile(formData).subscribe((res: any) => {
      console.log(res)
      if (res?.url) {
        this.adminForm.patchValue({ image: res.url })
      }
      console.log(this.adminForm.value)
    }, err => {
      console.log(err)
    })
  }

  updateprofile(){
    if (this.adminForm.valid) {
      var emailexp=/^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
      if(this.adminForm.value.email.match(emailexp)){
        this.service.updateProfiledata(this.adminForm.value, this.admin_id).subscribe((res) => {
          alert("Profile Updated");
          this.adminForm.reset();
          this.rout.navigateByUrl('/Admin/adminprofile')
        })
      }
      else{
        alert("Enter a valid email")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
