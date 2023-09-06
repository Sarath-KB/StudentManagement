import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-stream',
  templateUrl: './teacher-stream.component.html',
  styleUrls: ['./teacher-stream.component.css']
})
export class TeacherStreamComponent implements OnInit {

  constructor(private service:TeacherServiceService, private router:ActivatedRoute) { }

  sub_id:any
  t_id:any
  imageUrl:any=''
  readdata:any

  ngOnInit(): void {
    this.t_id=localStorage.getItem('t_id')
    this.sub_id=this.router.snapshot.paramMap.get('id')
    localStorage.setItem('sub_id',this.sub_id)
    this.service.getMydata(this.t_id).subscribe((res) => {
      this.imageUrl=res.data[0].faculty_photo
    })
    this.service.getStreamdata(this.sub_id).subscribe((res) => {
      this.readdata=res.data
      console.log(this.readdata)
    })
  }

}
