import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-register-complaint',
  templateUrl: './student-register-complaint.component.html',
  styleUrls: ['./student-register-complaint.component.css']
})
export class StudentRegisterComplaintComponent implements OnInit {

  constructor(private service: StudentServiceService, private rout:Router) { }

  s_id: any
  name: any
  email: any
  readdata:any
  place:any
  today: any = new Date();
  d_id:any
  complainanttype:any='Student'

  ngOnInit(): void {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = dd + '-' + mm + '-' + yyyy;
    this.s_id = localStorage.getItem('stud_id')
    this.service.getMydata(this.s_id).subscribe((res) => {
      this.name = res.data[0].student_name
      this.email = res.data[0].student_email
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
    studid: new FormControl('', Validators.required),
    complaint: new FormControl('', Validators.required),
    complaintdate: new FormControl('', Validators.required),
  })

  submit(){

    if (this.complaintform.value.to == 'Teacher') {
      this.d_id = localStorage.getItem('class_id')
      this.service.getClassteacher(this.d_id).subscribe((res) => {
        this.complaintform.patchValue({
          complainttargetid: res.data[0].faculty_id,
          complainanttype: this.complainanttype,
          studid: this.s_id,
          complaintdate: this.today
        })
      })
    }

    else if (this.complaintform.value.to == 'HOD') {
      this.d_id = localStorage.getItem('dept_id')
      this.service.getHoddata(this.d_id).subscribe((res) => {
        this.complaintform.patchValue({
          complainttargetid: res.data[0].faculty_id,
          complainanttype: this.complainanttype,
          studid: this.s_id,
          complaintdate: this.today
        })
      })
    }
    else if (this.complaintform.value.to == 'Admin') {
      this.complaintform.patchValue({
        complainttargetid: 0,
        complainanttype: this.complainanttype,
        studid: this.s_id,
        complaintdate: this.today
      })
    }
    console.log(this.complaintform.value)
    if(this.complaintform.valid)
    {
      this.service.createComplaint(this.complaintform.value).subscribe((res) => {
        alert("Complaint Registered Successfully")
        this.rout.navigateByUrl('/student/smycomplaints')
      })
    }
  }

}
