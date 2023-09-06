import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student-verify',
  templateUrl: './student-verify.component.html',
  styleUrls: ['./student-verify.component.css']
})
export class StudentVerifyComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute, private rout:Router) { }

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
      this.contact='+91'+res.data[0].student_contactno
      this.address=res.data[0].place_name+' '+res.data[0].district_name+', Kerala'
      this.dob=res.data[0].student_dob
      this.gender=res.data[0].student_gender
      this.adhaar=res.data[0].student_adhaar
    })
  }

  accept(){
    this.service.acceptStudent('hai',this.s_id).subscribe((res)=>{
      this.rout.navigateByUrl('/Admin/studentverifyview')
    });
  }

  reject(){
    this.service.rejectStudent('hai',this.s_id).subscribe((res)=>{
      this.rout.navigateByUrl('/Admin/studentverifyview')
    });
  }

}
