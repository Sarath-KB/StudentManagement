import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  readdata:any
  did:any

  ngOnInit(): void {
    this.did=localStorage.getItem('dept_id')
    this.service.getSubjectdata(this.did).subscribe((res)=>{
      this.readdata=res.data;
    })
  }

  DeleteSubject(id:any){
    this.service.DeleteSubject(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
