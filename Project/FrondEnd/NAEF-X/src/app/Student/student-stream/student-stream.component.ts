import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-stream',
  templateUrl: './student-stream.component.html',
  styleUrls: ['./student-stream.component.css']
})
export class StudentStreamComponent implements OnInit {

  constructor(private service:StudentServiceService, private router:ActivatedRoute) { }

  sub_id:any
  readdata:any
  ssem_id:any

  ngOnInit(): void {
    this.ssem_id=this.router.snapshot.paramMap.get('id')
    localStorage.setItem('ssem_id',this.ssem_id)
    this.sub_id=localStorage.getItem('ssub_id')
    this.service.getStreamdata(this.sub_id).subscribe((res)=>{
      this.readdata=res.data
      console.log(res)
    });
  }

}
