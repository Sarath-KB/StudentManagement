import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {

    this.service.getFacultydata().subscribe((res)=>{
      this.readdata=res.data;
    });

  }

  deletefaculty(id: any) {
    this.service.DeleteFaculty(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
