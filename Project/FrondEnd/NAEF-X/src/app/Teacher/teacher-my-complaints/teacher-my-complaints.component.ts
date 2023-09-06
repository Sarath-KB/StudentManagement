import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-my-complaints',
  templateUrl: './teacher-my-complaints.component.html',
  styleUrls: ['./teacher-my-complaints.component.css']
})
export class TeacherMyComplaintsComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }

  t_id:any
  readdata:any

  ngOnInit(): void {
    this.t_id=localStorage.getItem('t_id')
    this.service.getComplaint(this.t_id).subscribe((res) => {
      this.readdata=res.data
    })
  }

}
