import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-class-students',
  templateUrl: './teacher-class-students.component.html',
  styleUrls: ['./teacher-class-students.component.css']
})
export class TeacherClassStudentsComponent implements OnInit {

  constructor(private service:TeacherServiceService, private router:ActivatedRoute) { }

  getId:any
  readdata:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getClassStudents(this.getId).subscribe((res)=>{
        this.readdata=res.data;
        })
    }
  }

}
