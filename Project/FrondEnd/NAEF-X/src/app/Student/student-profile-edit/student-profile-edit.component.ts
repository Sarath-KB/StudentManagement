import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-profile-edit',
  templateUrl: './student-profile-edit.component.html',
  styleUrls: ['./student-profile-edit.component.css']
})
export class StudentProfileEditComponent implements OnInit {

  constructor(private service:StudentServiceService, private rout:Router) { }

  readdata:any
  id:any
  readdata2:any
  readdata3:any
  imageUrl:any=''
  stud_id:any
  name:any
  class:any

  studForm: FormGroup = new FormGroup({
    image: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dateofbirth: new FormControl('', Validators.required),
    adhaar: new FormControl('', Validators.required)

  });

  ngOnInit(): void {
    this.service.getDistrictdata().subscribe((res) => {
      this.readdata = res.data;
    });
    this.stud_id=localStorage.getItem('stud_id')
    this.service.getMydata(this.stud_id).subscribe((res) => {
      this.readdata3 = res.data;
      this.studForm.patchValue({
        image: res.data[0].student_photo, 
        email: res.data[0].student_email,
        contact: res.data[0].student_contactno,
        district: res.data[0].district_id,
        place: res.data[0].place_id,
        gender: res.data[0].student_gender,
        dateofbirth: res.data[0].student_dob,
        adhaar: res.data[0].student_adhaar
      })
      this.name=res.data[0].student_name
      this.class=res.data[0].course_abbreviation+' '+res.data[0].class_name+' '+res.data[0].batch_name
    })
  }

  getPlace(e: any) {
    this.id = e.target.value;
    console.log(e.target.value)
    this.service.getplacedata(this.id).subscribe((res) => {
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
    this.service.uploadHodProfile(formData).subscribe((res: any) => {
      console.log(res)
      if (res?.url) {
        this.studForm.patchValue({ image: res.url })
      }
      console.log(this.studForm.value)
    }, err => {
      console.log(err)
    })
  }

  updateprofile(){
    if (this.studForm.valid) {
      this.service.updateProfiledata(this.studForm.value, this.stud_id).subscribe((res) => {
        console.log("Profile Updated");
        this.studForm.reset();
        this.rout.navigateByUrl('/student/sprofile')
      })
    }
  }

}
