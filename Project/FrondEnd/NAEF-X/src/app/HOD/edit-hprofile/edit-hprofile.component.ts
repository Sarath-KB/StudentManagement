import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-edit-hprofile',
  templateUrl: './edit-hprofile.component.html',
  styleUrls: ['./edit-hprofile.component.css']
})
export class EditHProfileComponent implements OnInit {

  imageUrl = '';

  constructor(private hodService: HodServiceService, private rout: Router) { }

  hodForm: FormGroup = new FormGroup({
    image: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dateofbirth: new FormControl('', Validators.required),
    adhaar: new FormControl('', Validators.required)

  });

  readdata: any
  readdata2: any
  readdata3: any
  id: any
  hod_id: any
  name:any
  designation:any
  dept:any

  ngOnInit(): void {
    this.hodService.getDistrictdata().subscribe((res) => {
      this.readdata = res.data;
    });
    this.hod_id = localStorage.getItem('hod_id')
    this.hodService.getMydata(this.hod_id).subscribe((res) => {
      this.readdata3 = res.data;
      this.hodForm.patchValue({
        image: res.data[0].faculty_photo, 
        email: res.data[0].faculty_email,
        contact: res.data[0].faculty_contactno,
        district: res.data[0].district_id,
        place: res.data[0].place_id,
        gender: res.data[0].faculty_gender,
        dateofbirth: res.data[0].faculty_dob,
        adhaar: res.data[0].faculty_adhaarno
      })
      this.name=res.data[0].faculty_name
      this.designation=res.data[0].designation_title
      this.dept=res.data[0].dept_name
    });
  }

  getPlace(e: any) {
    this.id = e.target.value;
    console.log(e.target.value)
    this.hodService.getplacedata(this.id).subscribe((res) => {
      this.readdata2 = res.data;
    });
  }

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
    this.hodService.uploadHodProfile(formData).subscribe((res: any) => {
      console.log(res)
      if (res?.url) {
        this.hodForm.patchValue({ image: res.url })
      }
      console.log(this.hodForm.value)
    }, err => {
      console.log(err)
    })
  }

  updateprofile() {
    console.log(this.hodForm.value.image)
    if (this.hodForm.valid) {
      var emailexp=/^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
      if(this.hodForm.value.email.match(emailexp)){
        var numericExpression = /^[0-9]{8,10}$/;
        if(this.hodForm.value.contact.match(numericExpression)){
          var numericExpression = /^[0-9]{10}$/;
          if(this.hodForm.value.adhaar.match(numericExpression)){
            this.hodService.updateProfiledata(this.hodForm.value, this.hod_id).subscribe((res) => {
              alert("Profile Updated");
              this.hodForm.reset();
              this.rout.navigateByUrl('/HOD/hodprofile')
            })
          }
          else{
            alert("Adhaar number must be 10 digits")
          }
        }
      }
    }
    else{
      alert('All Fields Required')
    }
  }
}
