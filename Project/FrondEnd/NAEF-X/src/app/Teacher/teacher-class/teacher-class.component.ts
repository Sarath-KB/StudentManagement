import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-class',
  templateUrl: './teacher-class.component.html',
  styleUrls: ['./teacher-class.component.css']
})
export class TeacherClassComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }

  sub_id:any
  semname:any
  batchname:any
  classname:any
  course:any
  subject:any
  class_id:any

  ngOnInit(): void {
    this.sub_id=localStorage.getItem('sub_id')
    this.service.getSubjectData(this.sub_id).subscribe((res)=>{
      this.semname=res.data[0].semester_name
      this.batchname=res.data[0].batch_name
      this.classname=res.data[0].class_name
      this.course=res.data[0].course_abbreviation
      this.subject=res.data[0].subject_name
      this.class_id=res.data[0].class_id
    })
  }

}
