import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-complaints-view',
  templateUrl: './teacher-complaints-view.component.html',
  styleUrls: ['./teacher-complaints-view.component.css']
})
export class TeacherComplaintsViewComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }

  t_id:any
  readdata:any

  ngOnInit(): void {
    this.t_id=localStorage.getItem('t_id')
    this.service.getComplaintsToMe(this.t_id).subscribe((res) => {
      this.readdata=res.data
    })
  }

}
