import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.getCoursedata().subscribe((res)=>{
      this.readdata=res.data;
    })
  }

  deleteCourse(id: any) {
    this.service.DeleteCourse(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
