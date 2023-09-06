import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student-view-more',
  templateUrl: './student-view-more.component.html',
  styleUrls: ['./student-view-more.component.css']
})
export class StudentViewMoreComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute) { }

  s_id:any
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
    this.s_id=this.router.snapshot.paramMap.get('id')
    this.service.getStudentverifySingledata(this.s_id).subscribe((res)=>{
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
