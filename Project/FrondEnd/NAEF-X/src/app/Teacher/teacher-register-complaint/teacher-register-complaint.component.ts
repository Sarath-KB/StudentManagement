import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-register-complaint',
  templateUrl: './teacher-register-complaint.component.html',
  styleUrls: ['./teacher-register-complaint.component.css']
})
export class TeacherRegisterComplaintComponent implements OnInit {

  constructor(private service: TeacherServiceService, private rout: Router) { }

  t_id: any
  d_id: any
  name: any
  email: any
  readdata: any
  place: any
  today: any = new Date();
  complainanttype: any = 'Teacher'

  ngOnInit(): void {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = dd + '-' + mm + '-' + yyyy;
    this.t_id = localStorage.getItem('t_id')
    this.service.getMydata(this.t_id).subscribe((res) => {
      this.name = res.data[0].faculty_name
      this.email = res.data[0].faculty_email
      this.place = res.data[0].place_name
    })
    this.service.getComplaintCategory().subscribe((res) => {
      this.readdata = res.data
    })
  }

  complaintform = new FormGroup({
    complaintcategory: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    complainttargetid: new FormControl('', Validators.required),
    complainanttype: new FormControl('', Validators.required),
    facultyid: new FormControl('', Validators.required),
    complaint: new FormControl('', Validators.required),
    complaintdate: new FormControl('', Validators.required),
  })

  submit() {
    if (this.complaintform.value.to == 'HOD') {
      this.d_id = localStorage.getItem('dept_id')
      this.service.getHoddata(this.d_id).subscribe((res) => {
        this.complaintform.patchValue({
          complainttargetid: res.data[0].faculty_id,
          complainanttype: this.complainanttype,
          facultyid: this.t_id,
          complaintdate: this.today
        })
      })
    }
    else if (this.complaintform.value.to == 'Admin') {
      this.complaintform.patchValue({
        complainttargetid: 0,
        complainanttype: this.complainanttype,
        facultyid: this.t_id,
        complaintdate: this.today
      })
    }
    if(this.complaintform.valid)
    {
      this.service.createComplaint(this.complaintform.value).subscribe((res) => {
        alert("Complaint Registered Successfully")
        this.rout.navigateByUrl('/Teacher/tmycomplaints')
      })
    }
  }

}
