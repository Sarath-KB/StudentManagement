import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private service:StudentServiceService, private rout:Router) { }

  stud_id:any
  name:any
  imageUrl:any=''
  status:any

  ngOnInit(): void {
    this.stud_id=localStorage.getItem('stud_id')
    this.service.getMydata(this.stud_id).subscribe((res) => {
      console.log(res)
      this.name=res.data[0].student_name
      this.imageUrl=res.data[0].student_photo
      this.status=res.data[0].status
      console.log(res.data[0])
    })  
  }

  logout(){
    localStorage.removeItem('dept_id')
    localStorage.removeItem('stud_id')
    localStorage.removeItem('class_id')
    this.rout.navigateByUrl('/ghome')
  }

}
