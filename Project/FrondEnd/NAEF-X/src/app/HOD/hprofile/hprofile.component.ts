import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hprofile',
  templateUrl: './hprofile.component.html',
  styleUrls: ['./hprofile.component.css']
})
export class HProfileComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  hod_id:any
  imageUrl:any=''
  name:any
  designation:any
  dept:any
  email:any
  contact:any
  place:any
  district:any
  dob:any
  gender:any
  adhaar:any



  ngOnInit(): void {
    this.hod_id = localStorage.getItem('hod_id')
    this.service.getMydata(this.hod_id).subscribe((res) => {
      this.imageUrl=res.data[0].faculty_photo
      this.name=res.data[0].faculty_name
      this.designation=res.data[0].designation_title
      this.dept=res.data[0].dept_name
      this.email=res.data[0].faculty_email
      this.contact=res.data[0].faculty_contactno
      this.place=res.data[0].place_name
      this.district=res.data[0].district_name
      this.dob=res.data[0].faculty_dob
      this.gender=res.data[0].faculty_gender
      this.adhaar=res.data[0].faculty_adhaarno
    })
  }

}
