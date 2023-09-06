import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-student-details',
  templateUrl: './teacher-student-details.component.html',
  styleUrls: ['./teacher-student-details.component.css']
})
export class TeacherStudentDetailsComponent implements OnInit {

  constructor(private service:TeacherServiceService, private router:ActivatedRoute) { }

  stud_id:any
  image:any=''
  name:any
  class:any
  email:any
  contact:any
  address:any
  dob:any
  gender:any
  adhaar:any

  ngOnInit(): void {
    this.stud_id=this.router.snapshot.paramMap.get('id')
    this.service.getSingleStudentdata(this.stud_id).subscribe((res)=>{
      this.image=res.data[0].student_photo
      this.name=res.data[0].student_name
      this.email=res.data[0].student_email
      this.class=res.data[0].course_abbreviation+' '+res.data[0].class_name+' '+res.data[0].batch_name
      this.contact=res.data[0].student_contactno
      this.address=res.data[0].place_name+' '+res.data[0].district_name+', Kerala'
      this.dob=res.data[0].student_dob
      this.gender=res.data[0].student_gender
      this.adhaar=res.data[0].student_adhaar
    })
  }

}
