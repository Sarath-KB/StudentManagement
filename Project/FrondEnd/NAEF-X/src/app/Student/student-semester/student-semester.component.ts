import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-semester',
  templateUrl: './student-semester.component.html',
  styleUrls: ['./student-semester.component.css']
})
export class StudentSemesterComponent implements OnInit {

  constructor(private service:StudentServiceService, private router:ActivatedRoute) { }

  semid:any
  readdata:any
  sub_id:any

  ngOnInit(): void {
    this.semid=localStorage.getItem('ssem_id')
    console.log(this.semid)
    this.service.getSubjects(this.semid).subscribe((res) => {
      this.readdata = res.data
      this.sub_id=localStorage.getItem('ssub_id')
      this.selectsub.patchValue({
        subject:this.sub_id
      })
    })
  }

  selectsub = new FormGroup({
    subject: new FormControl('',Validators.required)
  })

  onchange(e: any){
    this.sub_id = e.target.value;
    localStorage.setItem('ssub_id',this.sub_id)
    window.location.reload()
  }

}
