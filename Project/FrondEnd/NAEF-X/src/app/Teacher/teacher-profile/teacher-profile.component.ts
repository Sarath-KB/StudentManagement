import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {


  t_id:any
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

  constructor(private service:TeacherServiceService) { }

  ngOnInit(): void {
    this.t_id = localStorage.getItem('t_id')
    this.service.getMydata(this.t_id).subscribe((res) => {
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
