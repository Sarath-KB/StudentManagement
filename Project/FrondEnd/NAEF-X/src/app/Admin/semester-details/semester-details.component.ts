import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-semester-details',
  templateUrl: './semester-details.component.html',
  styleUrls: ['./semester-details.component.css']
})
export class SemesterDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.getSemesterdata().subscribe((res)=>{
      this.readdata=res.data;
  })
}
deleteSemester(id: any) {
  this.service.DeleteSemester(id).subscribe((res) => {
    console.log("Data Deleted");

  });
    window.location.reload();
}

}
