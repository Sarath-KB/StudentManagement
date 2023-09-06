import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private service:StudentServiceService) { }

  stud_id:any
  imgurl:any=''
  name:any
  class:any
  email:any
  contact:any
  district:any
  place:any
  dob:any
  gender:any
  adhaar:any

  ngOnInit(): void {
    this.stud_id=localStorage.getItem('stud_id')
    this.service.getMydata(this.stud_id).subscribe((res)=>{
      this.imgurl=res.data[0].student_photo
      this.name=res.data[0].student_name
      this.class=res.data[0].course_abbreviation+' '+res.data[0].class_name+' '+res.data[0].batch_name
      this.email=res.data[0].student_email
      this.contact=res.data[0].student_contactno
      this.district=res.data[0].district_name
      this.place=res.data[0].place_name
      this.dob=res.data[0].student_dob
      this.gender=res.data[0].student_gender
      this.adhaar=res.data[0].student_adhaar
    })
  }

}
