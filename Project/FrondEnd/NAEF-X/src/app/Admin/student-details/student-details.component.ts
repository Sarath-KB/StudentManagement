import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.getStudentdata().subscribe((res)=>{
      this.readdata=res.data
    })
  }

  deleteStudent(id: any) {
    this.service.DeleteStudent(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
