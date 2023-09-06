import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-my-complaints',
  templateUrl: './student-my-complaints.component.html',
  styleUrls: ['./student-my-complaints.component.css']
})
export class StudentMyComplaintsComponent implements OnInit {

  constructor(private service:StudentServiceService) { }

  s_id:any
  readdata:any

  ngOnInit(): void {
    this.s_id=localStorage.getItem('stud_id')
    this.service.getMyComplaints(this.s_id).subscribe((res) => {
      this.readdata = res.data
    })
  }

}
