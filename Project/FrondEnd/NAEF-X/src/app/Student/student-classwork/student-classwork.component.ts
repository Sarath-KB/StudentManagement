import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-classwork',
  templateUrl: './student-classwork.component.html',
  styleUrls: ['./student-classwork.component.css']
})
export class StudentClassworkComponent implements OnInit {

  constructor(private service:StudentServiceService, private router:ActivatedRoute) { }

  ssem_id:any
  sub_id:any
  readdata:any

  ngOnInit(): void {
    this.ssem_id=this.router.snapshot.paramMap.get('id')
    localStorage.setItem('ssem_id',this.ssem_id)
    this.sub_id=localStorage.getItem('ssub_id')
    this.service.getClassworkata(this.sub_id).subscribe((res)=>{
      this.readdata=res.data
    });
  }

}
