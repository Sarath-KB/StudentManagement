import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {


  constructor(private service:StudentServiceService) { }

  s_id:any
  readdata:any
  status:any

  ngOnInit(): void {
    this.s_id=localStorage.getItem('stud_id')
    this.service.getSemesterData(this.s_id).subscribe((res) => {
      this.readdata = res.data
    })
    this.service.getMydata(this.s_id).subscribe((res) => {
      this.status=res.data[0].status
    })  
  }

}
