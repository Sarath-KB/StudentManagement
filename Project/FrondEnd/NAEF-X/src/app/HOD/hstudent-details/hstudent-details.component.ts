import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hstudent-details',
  templateUrl: './hstudent-details.component.html',
  styleUrls: ['./hstudent-details.component.css']
})
export class HStudentDetailsComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  dept_id:any
  readdata:any

  ngOnInit(): void {
    this.dept_id=localStorage.getItem('dept_id')
    this.service.getDepartmentStudents(this.dept_id).subscribe((res)=>{
      this.readdata=res.data;
    })
  }

}
