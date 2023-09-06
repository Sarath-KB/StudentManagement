import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-complaint-respond',
  templateUrl: './teacher-complaint-respond.component.html',
  styleUrls: ['./teacher-complaint-respond.component.css']
})
export class TeacherComplaintRespondComponent implements OnInit {

  constructor(private service:TeacherServiceService,private rout:Router ,private router:ActivatedRoute) { }

  c_id:any
  s_name:any
  s_email:any
  c_target:any
  c_category:any
  complaint:any
  place:any
  date:any
  status:any

  ngOnInit(): void {
    this.c_id=this.router.snapshot.paramMap.get('id')
    this.service.getSingleComplaint(this.c_id).subscribe((res) => {
      this.s_name=res.data[0].student_name
      this.s_email=res.data[0].student_email
      this.c_target=res.data[0].complaint_target
      this.c_category=res.data[0].complainant_category_title
      this.complaint=res.data[0].complaint
      this.place=res.data[0].place_name
      this.date=res.data[0].complaint_date
      this.status=res.data[0].complaint_status
      this.statusupdateform.patchValue({
        status:res.data[0].status
      })
    })
  }

  statusupdateform = new FormGroup({
    status: new FormControl('',Validators.required)
  })

  updatestatus(){
    if(this.statusupdateform.valid)
    {
      this.service.updateComplaintdata(this.statusupdateform.value,this.c_id).subscribe((res)=>{
        console.log(res,'resupdated')
        this.rout.navigateByUrl('/Teacher/tviewcomplaint')
      });
    }
  }

}
