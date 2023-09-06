import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private service: AdminServiceService, private rout: Router) { }

  readdata1: any
  readdata2: any
  readdata3: any
  readdata4: any
  id: any
  id2: any
  username: any
  name: any

  ngOnInit(): void {
    this.service.getDesignationdata().subscribe((res) => {
      this.readdata1 = res.data
    })

    this.service.getDeptdata().subscribe((res) => {
      this.readdata2 = res.data
    })

    this.service.getDistrictdata().subscribe((res) => {
      this.readdata4 = res.data
      console.log(this.readdata4)
    })
  }

  getPlace(e: any) {
    this.id = e.target.value;
    console.log(e.target.value)
    this.service.getplacedata(this.id).subscribe((res) => {
      this.readdata3 = res.data;
    });
  }

  facultyform = new FormGroup({
    facultyname: new FormControl('', Validators.required),
    facultydesignation: new FormControl('', Validators.required),
    facultyemail: new FormControl('', Validators.required),
    facultydept: new FormControl('', Validators.required),
    facultydist: new FormControl('', Validators.required),
    facultyplace: new FormControl('', Validators.required),
    facultyusername: new FormControl('', Validators.required),
    facultypassword: new FormControl('', Validators.required)
  })

  generateusername() {
    this.service.getMaxFaculty().subscribe((res) => {
      this.id2 = res.data[0].id
      this.id2 = this.id2 + 1
      this.name = this.facultyform.value.facultyname.slice(0, 3)
      this.username = this.name + this.id2
      this.facultyform.patchValue({
        facultyusername: this.username
      })
    })
  }

  facultysubmit() {
    if (this.facultyform.valid) {
      var nameexp = /^([A-Za-z ]*)$/;
      if (this.facultyform.value.facultyname.match(nameexp)) {
        var emailexp = /^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
        if (this.facultyform.value.facultyemail.match(emailexp)) {
          this.service.createFacultydata(this.facultyform.value).subscribe((res) => {
            alert("Faculty Registered Successfully")
            this.facultyform.reset();
            this.rout.navigateByUrl('/Admin/facultyview')
          })
        }
        else {
          alert("Please Enter a valid email address")
        }
      }
      else {
        alert("Please enter a valid name")
      }
    }
    else {
      alert("All Fields are Required")
    }
  }

}
