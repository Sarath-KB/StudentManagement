import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Admin/admin-service.service';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }

  readdata:any
  tid:any
  status:any

  ngOnInit(): void {
    this.tid=localStorage.getItem("t_id")
    this.service.getSemesterdata(this.tid).subscribe((res)=>{
      this.readdata=res.data;
      })
    this.service.getMydata(this.tid).subscribe((res) => {
      this.status=res.data[0].status
    })
  }

}
