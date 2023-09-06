import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private client:HttpClient) { }  
  
  //Connect Frondend and Backend

  distapi='http://localhost:3000/district';
  placeapi='http://localhost:3000/place';
  distplaceapi='http://localhost:3000/distplace';
  deptapi='http://localhost:3000/dept';
  designationapi='http://localhost:3000/designation';
  facultyapi='http://localhost:3000/faculty';
  coursetypeapi='http://localhost:3000/ctype';
  courseapi='http://localhost:3000/course';
  batchapi='http://localhost:3000/batch';
  semesterapi='http://localhost:3000/semester';
  studentapi='http://localhost:3000/astudent';
  cstudentapi='http://localhost:3000/createstudent';
  studentverifyapi='http://localhost:3000/studentverify';
  facultyverifyapi='http://localhost:3000/facultyverify';
  classapi='http://localhost:3000/class';
  acceptfacultyapi='http://localhost:3000/faccept';
  rejectfacultyapi='http://localhost:3000/freject';
  addadminapi='http://localhost:3000/addadmin';
  addnewadminapi='http://localhost:3000/addnewadmin';
  getadminapi='http://localhost:3000/getadmin';
  hodApi='http://localhost:3000/hod';
  changepass='http://localhost:3000/achangepass';
  singlestudapi='http://localhost:3000/asinglestud';
  acceptstudentapi='http://localhost:3000/saccept';
  rejectstudentapi='http://localhost:3000/sreject';
  complaintviewapi='http://localhost:3000/acomplaintview';
  singlecomplaintapi='http://localhost:3000/asinglecomplaint';
  maxfacultyapi='http://localhost:3000/maxfaculty';
  maxstudentapi='http://localhost:3000/maxstudent';
  deptreportapi='http://localhost:3000/deptreport';
  placereportapi='http://localhost:3000/placereport';

  getAdminsingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.getadminapi}/${ids}`);
  }

  getPlaceCount():Observable<any>
  {
    return this.client.get(`${this.placereportapi}`);
  }

  getDeptcount():Observable<any>
  {
    return this.client.get(`${this.deptreportapi}`);
  }

  getMaxFaculty():Observable<any>
  {
    return this.client.get(`${this.maxfacultyapi}`);
  }

  getMaxStudent():Observable<any>
  {
    return this.client.get(`${this.maxstudentapi}`);
  }

  complaintstome():Observable<any>
  {
    return this.client.get(`${this.complaintviewapi}`);
  }

  getSingleComplaintdata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.singlecomplaintapi}/${ids}`);
  }

  UpdateComplaintdata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.singlecomplaintapi}/${ids}`,data);
  }

  changePassword(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.changepass}/${id}`,data);
  }

  getDistrictdata():Observable<any>
  {
    return this.client.get(`${this.distapi}`);
  }

  getDistrictsingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.distapi}/${id}`);
  }

  getPlacedata():Observable<any>
  {
    return this.client.get(`${this.placeapi}`);
  }

  getPlacesingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.placeapi}/${ids}`);
  }

  getplacedata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.distplaceapi}/${ids}`);
  }

  getDeptdata():Observable<any>
  {
    return this.client.get(`${this.deptapi}`);
  }

  uploadHodProfile(data:any): Observable<any> 
  {
    return this.client.post(`${this.hodApi}/profilePhoto`, data)
  }

  getDeptsingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.deptapi}/${ids}`)
  }

  getDesignationdata():Observable<any>
  {
    return this.client.get(`${this.designationapi}`);
  }

  getFacultydata():Observable<any>
  {
    return this.client.get(`${this.facultyapi}`);
  }

  getFacultysingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.facultyapi}/${ids}`)
  }

  getStudentverifySingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.singlestudapi}/${ids}`)
  }

  getCoursetypedata():Observable<any>
  {
    return this.client.get(`${this.coursetypeapi}`);
  }

  getCoursedata():Observable<any>
  {
    return this.client.get(`${this.courseapi}`);
  }

  getCoursesingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.courseapi}/${ids}`)
  }

  getBatchdata():Observable<any>
  {
    return this.client.get(`${this.batchapi}`);
  }

  getBatchsingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.batchapi}/${ids}`)
  }

  getSemesterdata():Observable<any>
  {
    return this.client.get(`${this.semesterapi}`);
  }

  getSemestersingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.semesterapi}/${ids}`)
  }

  getStudentdata():Observable<any>
  {
    return this.client.get(`${this.studentapi}`);
  }

  getStudentsingledata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.studentapi}/${ids}`)
  }


  getStudentverifydata():Observable<any>
  {
    return this.client.get(`${this.studentverifyapi}`);
  }

  getFacultyverifydata():Observable<any>
  {
    return this.client.get(`${this.facultyverifyapi}`);
  }

  getClassdata():Observable<any>
  {
    return this.client.get(`${this.classapi}`);
  }

  createDistrictdata(data:any):Observable<any>
  {
	  return this.client.post(`${this.distapi}`,data);
  }

  createStudentdata(data:any):Observable<any>
  {
	  return this.client.post(`${this.cstudentapi}`,data);
  }

  createPlacedata(data:any):Observable<any>
  {
	  return this.client.post(`${this.placeapi}`,data);
  }

  createDeptdata(data:any):Observable<any>
  {
    return this.client.post(`${this.deptapi}`,data);
  }

  createDesignationdata(data:any):Observable<any>
  {
    return this.client.post(`${this.designationapi}`,data);
  }

  createFacultydata(data:any):Observable<any>
  {
    return this.client.post(`${this.facultyapi}`,data);
  }

  createCoursetypedata(data:any):Observable<any>
  {
    return this.client.post(`${this.coursetypeapi}`,data);
  }

  createCoursedata(data:any):Observable<any>
  {
    return this.client.post(`${this.courseapi}`,data);
  }

  createBatchdata(data:any):Observable<any>
  {
    return this.client.post(`${this.batchapi}`,data);
  }

  createSemesterdata(data:any):Observable<any>
  {
    return this.client.post(`${this.semesterapi}`,data);
  }
  
  DeleteDistrict(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.distapi}/${ids}`)
  }

  DeletePlace(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.placeapi}/${ids}`)
  }

  DeleteDept(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.deptapi}/${ids}`)
  }

  DeleteDesignation(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.designationapi}/${ids}`)
  }

  DeleteFaculty(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.facultyapi}/${ids}`)
  }

  DeleteCoursetype(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.coursetypeapi}/${ids}`)
  }

  DeleteCourse(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.courseapi}/${ids}`)
  }

  DeleteBatch(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.batchapi}/${ids}`)
  }

  DeleteSemester(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.semesterapi}/${ids}`)
  }

  DeleteStudent(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.studentapi}/${ids}`)
  }

  updateDistrictdata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.distapi}/${ids}`,data);
  }

  updateProfiledata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.getadminapi}/${ids}`,data);
  }

  updateDeptdata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.deptapi}/${ids}`,data);
  }

  updatePlacedata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.placeapi}/${ids}`,data);
  }

  updateFacultydata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.facultyapi}/${ids}`,data);
  }

  updateCoursedata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.courseapi}/${ids}`,data);
  }

  updateBatchdata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.batchapi}/${ids}`,data);
  }

  updateSemesterdata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.semesterapi}/${ids}`,data);
  }

  updateStudentdata(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.studentapi}/${ids}`,data);
  }

  acceptFaculty(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.acceptfacultyapi}/${ids}`,data);
  }

  rejectFaculty(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.rejectfacultyapi}/${ids}`,data);
  }

  acceptStudent(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.acceptstudentapi}/${ids}`,data);
  }

  rejectStudent(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.client.put(`${this.rejectstudentapi}/${ids}`,data);
  }

  uploadAdminPhoto(data:any): Observable<any> 
  {
    return this.client.post(`${this.addadminapi}/profilePhoto`, data)
  }
  createAdmindata(data:any):Observable<any>
  {
	  return this.client.post(`${this.addnewadminapi}`,data);
  }
}
