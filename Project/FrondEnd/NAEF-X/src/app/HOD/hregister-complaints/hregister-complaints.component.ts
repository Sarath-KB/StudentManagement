import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hregister-complaints',
  templateUrl: './hregister-complaints.component.html',
  styleUrls: ['./hregister-complaints.component.css']
})
export class HRegisterComplaintsComponent implements OnInit {

  constructor(private service: HodServiceService, private rout:Router) { }

  hod_id: any
  d_id: any
  name: any
  email: any
  readdata: any
  place: any
  today: any = new Date();
  complainanttype: any = 'HOD'

  ngOnInit(): void {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = dd + '-' + mm + '-' + yyyy;
    this.hod_id = localStorage.getItem('hod_id')
    this.service.getMydata(this.hod_id).subscribe((res) => {
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
    this.complaintform.patchValue({
      complainttargetid: 0,
      complainanttype: this.complainanttype,
      facultyid: this.hod_id,
      complaintdate: this.today
    })
  if(this.complaintform.valid) {
    this.service.createComplaint(this.complaintform.value).subscribe((res) => {
      alert("Complaint Registered Successfully")
      this.rout.navigateByUrl('/HOD/hcomplaints')
    })
  }
}

}
