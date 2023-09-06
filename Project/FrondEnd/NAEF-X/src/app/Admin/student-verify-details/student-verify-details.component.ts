import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student-verify-details',
  templateUrl: './student-verify-details.component.html',
  styleUrls: ['./student-verify-details.component.css']
})
export class StudentVerifyDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.getStudentverifydata().subscribe((res)=>{
      this.readdata=res.data
    })
  }

}
