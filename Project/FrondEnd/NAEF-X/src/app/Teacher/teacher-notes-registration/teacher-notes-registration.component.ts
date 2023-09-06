import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-notes-registration',
  templateUrl: './teacher-notes-registration.component.html',
  styleUrls: ['./teacher-notes-registration.component.css']
})
export class TeacherNotesRegistrationComponent implements OnInit {

  constructor(private service: TeacherServiceService, private router:ActivatedRoute, private rout: Router) { }

  imageUrl: any = ''
  getId:any
  date:any

  ngOnInit(): void {
    this.date = new Date()
    this.getId=this.router.snapshot.paramMap.get('id')
    this.noteregisterform.patchValue({
      subject_id: this.getId,
      date: this.date
    })
  }

  noteregisterform = new FormGroup({
    file: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    discription: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    subject_id: new FormControl('', Validators.required)
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
        this.noteregisterform.patchValue({ file: res.url })
      }
      console.log(this.noteregisterform.value)
    }, err => {
      console.log(err)
    })
  }

  submit() {

    if (this.noteregisterform.valid) {
      this.service.createNotesdata(this.noteregisterform.value).subscribe((res) => {
        alert("Notes Added Successfully")
        this.rout.navigateByUrl('/Teacher/teacherclass/tstream/'+this.getId)
      })
    }
  }

}
