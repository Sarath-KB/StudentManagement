import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-faculty-verify-details',
  templateUrl: './faculty-verify-details.component.html',
  styleUrls: ['./faculty-verify-details.component.css']
})
export class FacultyVerifyDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.getFacultyverifydata().subscribe((res)=>{
      this.readdata=res.data
    })
  }

}
