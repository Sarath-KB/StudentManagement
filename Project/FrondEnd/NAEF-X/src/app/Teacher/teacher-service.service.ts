import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private client:HttpClient) { }

  //Connect Frondend and Backend

  semesterapi='http://localhost:3000/tsemester';
  subjectapi='http://localhost:3000/tsubject';
  classworkapi='http://localhost:3000/tclasswork';
  singleclasswork='http://localhost:3000/tsingleclasswork';
  submittedontime='http://localhost:3000/tsubmittedontime';
  submittedlate='http://localhost:3000/tsubmittedlate';
  notsubmitted='http://localhost:3000/tsubmittednot';
  classstudents='http://localhost:3000/tclassstudents';
  facultyapi='http://localhost:3000/tfaculty';
  scountapi='http://localhost:3000/scount';
  distapi='http://localhost:3000/hdist';
  placeapi='http://localhost:3000/hplace';
  hodApi='http://localhost:3000/hod';
  profileapi='http://localhost:3000/hprofile';
  changepassapi='http://localhost:3000/hchangepass';
  complaintcategoryapi='http://localhost:3000/ccategory';
  studentsapi='http://localhost:3000/hstudents';
  thodapi='http://localhost:3000/thod';
  complaint='http://localhost:3000/tcomplaint';
  mycomplaint='http://localhost:3000/tmycomplaint';
  tomecomplaint='http://localhost:3000/ttomecomplaint';
  verifycomplaint='http://localhost:3000/tverifycomplaint';
  getSingleStudentapi='http://localhost:3000/hsinglestudents';
  notesapi='http://localhost:3000/tnotes';
  streamapi='http://localhost:3000/tstream';
  assignmentcount='http://localhost:3000/tasscount';
  deletecwapi='http://localhost:3000/deletecw';

  getSemesterdata(id:any):Observable<any>
  {
    let ids=id
    return this.client.get(`${this.semesterapi}/${ids}`);
  }

  getSubjectData(id:any):Observable<any>
  {
    let ids=id
    return this.client.get(`${this.subjectapi}/${ids}`);
  }

  DeleteClasswork(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.deletecwapi}/${ids}`);
  }

  getStudentcount(id:any):Observable<any>
  {
    let ids=id
    return this.client.get(`${this.scountapi}/${ids}`);
  }

  getSingleStudentdata(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.getSingleStudentapi}/${ids}`);
  }

  getDepartmentStudents(id:any):Observable<any>
  {
    let ids=id
    return this.client.get(`${this.studentsapi}/${ids}`);
  }

  getClassStudents(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.classstudents}/${ids}`)
  }

  getAssignmentcount(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.assignmentcount}/${ids}`)
  }

  assignmentSubmitted(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.submittedontime}/${ids}`)
  }

  assignmentLateSubmitted(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.submittedlate}/${ids}`)
  }

  assignmentNotSubmitted(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.notsubmitted}/${ids}`)
  }

  getMydata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.facultyapi}/${ids}`)
  }

  getStreamdata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.streamapi}/${ids}`)
  }

  getNotedata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.notesapi}/${ids}`)
  }

  getDistrictdata(): Observable<any> 
  {
    return this.client.get(`${this.distapi}`)
  }

  getplacedata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.placeapi}/${ids}`)
  }

  uploadHodProfile(data:any): Observable<any> 
  {
    return this.client.post(`${this.hodApi}/profilePhoto`, data)
  }

  updateProfiledata(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.profileapi}/${ids}`,data)
  }

  updateNotesdata(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.notesapi}/${ids}`,data)
  }

  changePassword(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.changepassapi}/${ids}`,data)
  }

  getComplaintCategory(): Observable<any> 
  {
    return this.client.get(`${this.complaintcategoryapi}`)
  }

  getHoddata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.thodapi}/${ids}`)
  }

  createComplaint(data:any):Observable<any>
  {
	  return this.client.post(`${this.complaint}`,data);
  }

  getComplaint(id:any):Observable<any>
  {
    let ids=id
	  return this.client.get(`${this.mycomplaint}/${ids}`);
  }

  getComplaintsToMe(id:any):Observable<any>
  {
    let ids=id
	  return this.client.get(`${this.tomecomplaint}/${ids}`);
  }

  getSingleComplaint(id:any):Observable<any>
  {
    let ids=id
	  return this.client.get(`${this.verifycomplaint}/${ids}`);
  }

  updateComplaintdata(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.verifycomplaint}/${ids}`,data)
  }

  createNotesdata(data:any):Observable<any>
  {
	  return this.client.post(`${this.notesapi}`,data);
  }

  createClassworkdata(data:any):Observable<any>
  {
	  return this.client.post(`${this.classworkapi}`,data);
  }

  getClassworkdata(id:any):Observable<any>
  {
    let ids=id
	  return this.client.get(`${this.classworkapi}/${ids}`);
  }

  getSingleClassworkdata(id:any):Observable<any>
  {
    let ids=id
	  return this.client.get(`${this.singleclasswork}/${ids}`);
  }

  updateClassworkdata(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.singleclasswork}/${ids}`,data)
  }

  deleteNotes(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.notesapi}/${ids}`);
  }

}
