import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-classwork',
  templateUrl: './teacher-classwork.component.html',
  styleUrls: ['./teacher-classwork.component.css']
})
export class TeacherClassworkComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }

  sub_id:any
  t_id:any
  imageUrl:any=''
  readdata:any
  subname:any
  title:any
  date:any

  ngOnInit(): void {
    this.sub_id=localStorage.getItem('sub_id')
    this.service.getClassworkdata(this.sub_id).subscribe((res) => {
      this.readdata=res.data
    })
  }

}
