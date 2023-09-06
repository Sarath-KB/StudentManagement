import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-view-student',
  templateUrl: './teacher-view-student.component.html',
  styleUrls: ['./teacher-view-student.component.css']
})
export class TeacherViewStudentComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }

  dept_id:any
  readdata:any

  ngOnInit(): void {
    this.dept_id=localStorage.getItem('dept_id')
    this.service.getDepartmentStudents(this.dept_id).subscribe((res)=>{
      this.readdata=res.data
    })
  }

}
