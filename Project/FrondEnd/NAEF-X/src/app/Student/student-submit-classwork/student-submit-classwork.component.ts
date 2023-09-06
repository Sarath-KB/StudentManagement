import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-submit-classwork',
  templateUrl: './student-submit-classwork.component.html',
  styleUrls: ['./student-submit-classwork.component.css']
})
export class StudentSubmitClassworkComponent implements OnInit {

  constructor(private service:StudentServiceService, private router:ActivatedRoute, private sanitiser: DomSanitizer) { }

  a_id:any
  title:any
  description:any
  url:any
  s_id:any
  today: any = new Date();
  imageUrl:any=''
  due:any

  ngOnInit(): void {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = yyyy + '-' + mm + '-' + dd;
    this.a_id=this.router.snapshot.paramMap.get('id')
    this.service.getAssignments(this.a_id).subscribe((res)=>{
      this.title=res.data[0].assignment_title
      this.description=res.data[0].assignment_description
      this.url=res.data[0].files
      this.due=res.data[0].due_date
    });
  }

  submitassignment = new FormGroup({
    file: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    student: new FormControl('',Validators.required),
    assignment: new FormControl('',Validators.required)
  })

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (!file) {
      return
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string
    }
    const formData = new FormData();
    formData.append("hodPforile", file);
    this.service.uploadHodProfile(formData).subscribe((res: any) => {
      console.log(res)
      if (res?.url) {
        this.submitassignment.patchValue({ file: res.url })
      }
      console.log(this.submitassignment.value)
    }, err => {
      console.log(err)
    })
  }

  submit(){
    this.s_id=localStorage.getItem('stud_id')
    this.submitassignment.patchValue({
      date: this.today,
      student: this.s_id,
      assignment: this.a_id
    })
    if(this.submitassignment.valid){
      this.service.submitAssignment(this.submitassignment.value).subscribe((res)=>{
        alert("Assignment Submitted Successfully")
      });
    }
  }

  sanitizeurl(url: string) {
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

}
