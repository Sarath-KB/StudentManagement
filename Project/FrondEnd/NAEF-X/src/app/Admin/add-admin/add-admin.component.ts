import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  imageUrl:any=''

  ngOnInit(): void {
  }

  addadminform = new FormGroup({
    image: new FormControl('',Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required)
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
    formData.append("adminPforile", file);
    this.service.uploadAdminPhoto(formData).subscribe((res: any) => {
      console.log(res)
      if (res?.url) {
        this.addadminform.patchValue({ image: res.url })
      }
      console.log(this.addadminform.value)
    }, err => {
      console.log(err)
    })
  }

  addAdmin(){
    console.log(this.addadminform.value.image)
    if (this.addadminform.valid) {
      var nameexp=/^([A-Za-z ]*)$/;
      if(this.addadminform.value.name.match(nameexp)){
        var emailexp=/^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
        if(this.addadminform.value.email.match(emailexp)){
          this.service.createAdmindata(this.addadminform.value).subscribe((res) => {
            alert("Admin Added Successfully");
            this.rout.navigateByUrl('/Admin')
          })
        }
        else{
          alert("Enter a valid email")
        }
      }
      else{
        alert("Enter a valid name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
