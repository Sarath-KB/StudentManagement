import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-edit-profile',
  templateUrl: './teacher-edit-profile.component.html',
  styleUrls: ['./teacher-edit-profile.component.css']
})
export class TeacherEditProfileComponent implements OnInit {

  constructor(private service:TeacherServiceService, private rout:Router) { }

  imageUrl:any=''

  facultyForm: FormGroup = new FormGroup({
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
  t_id: any
  name:any
  designation:any
  dept:any

  ngOnInit(): void {
    this.service.getDistrictdata().subscribe((res) => {
      this.readdata = res.data;
    });
    this.t_id = localStorage.getItem('t_id')
    this.service.getMydata(this.t_id).subscribe((res) => {
      this.readdata3 = res.data;
      this.facultyForm.patchValue({
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
    this.service.getplacedata(this.id).subscribe((res) => {
      this.readdata2 = res.data;
    });
  }

  onFileChange (event: any){
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
        this.facultyForm.patchValue({ image: res.url })
      }
      console.log(this.facultyForm.value)
    }, err => {
      console.log(err)
    })
  }

  updateprofile() {
    console.log(this.facultyForm.value.image)
    if (this.facultyForm.valid) {
      this.service.updateProfiledata(this.facultyForm.value, this.t_id).subscribe((res) => {
        console.log("Profile Updated");
        this.facultyForm.reset();
        this.rout.navigateByUrl('/Teacher/teacherprofile')
      })
    }
  }

}
