import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-my-teachers',
  templateUrl: './student-my-teachers.component.html',
  styleUrls: ['./student-my-teachers.component.css']
})
export class StudentMyTeachersComponent implements OnInit {

  constructor(private service:StudentServiceService) { }

  d_id:any
  readdata:any

  ngOnInit(): void {
    this.d_id=localStorage.getItem('dept_id')
    this.service.getMyTeachersdata(this.d_id).subscribe((res)=>{
      this.readdata=res.data
      console.log(this.readdata)
    });
  }

}
