import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-classwork-details',
  templateUrl: './teacher-classwork-details.component.html',
  styleUrls: ['./teacher-classwork-details.component.css']
})
export class TeacherClassworkDetailsComponent implements OnInit {

  constructor(private service:TeacherServiceService, private router:ActivatedRoute,private sanitiser: DomSanitizer, private rout:Router) { }

  cw_id:any
  title:any
  description:any
  Pdfurl:any
  readdata:any
  readdata1:any
  readdata2:any

  ngOnInit(): void {
    this.cw_id=this.router.snapshot.paramMap.get('id')
    this.service.getSingleClassworkdata(this.cw_id).subscribe((res) => {
      this.title=res.data[0].assignment_title
      this.description=res.data[0].assignment_description
      this.Pdfurl=res.data[0].files
    })
    this.service.assignmentSubmitted(this.cw_id).subscribe((res) => {
      this.readdata=res.data
    })
    this.service.assignmentLateSubmitted(this.cw_id).subscribe((res) => {
      this.readdata1=res.data
    })
    this.service.assignmentNotSubmitted(this.cw_id).subscribe((res) => {
      this.readdata2=res.data
    })

  }

  sanitizeurl(url: string) {
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }
  sub_id:any

  deletework(){
    this.sub_id = localStorage.getItem('sub_id')
    this.service.DeleteClasswork(this.cw_id).subscribe((res) => {
      alert("Classwork Deleted Successfully")
      console.log(this.sub_id)
      this.rout.navigate(['/Teacher/teacherclass/tclasswork', this.sub_id])
    }, err => {
      console.log(err)
    })
  }

}
