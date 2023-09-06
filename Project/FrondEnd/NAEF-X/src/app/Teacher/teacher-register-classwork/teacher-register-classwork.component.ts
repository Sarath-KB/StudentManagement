import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-register-classwork',
  templateUrl: './teacher-register-classwork.component.html',
  styleUrls: ['./teacher-register-classwork.component.css']
})
export class TeacherRegisterClassworkComponent implements OnInit {

  constructor(private service:TeacherServiceService, private router:ActivatedRoute, private rout:Router) { }

  imageUrl:any=''
  getId:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id')
    this.classworkregisterform.patchValue({
      subjectid: this.getId
    })
  }

  classworkregisterform = new FormGroup({
    subjectid: new FormControl('',Validators.required),
    file: new FormControl('',Validators.required),
    discription: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
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
        this.classworkregisterform.patchValue({ file: res.url })
      }
      console.log(this.classworkregisterform.value)
    }, err => {
      console.log(err)
    })
  }

  submit() {

    if (this.classworkregisterform.valid) {
      console.log(this.classworkregisterform.value)
      this.service.createClassworkdata(this.classworkregisterform.value).subscribe((res) => {
        alert("Classwork Added Successfully")
        this.rout.navigateByUrl('/Teacher/teacherclass/tclasswork/'+this.getId)
      })
    }
  }

}
