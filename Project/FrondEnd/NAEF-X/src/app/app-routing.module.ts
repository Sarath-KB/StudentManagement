import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
import { DistrictComponent } from './Admin/district/district.component';
import { DistrictDetailsComponent } from './Admin/district-details/district-details.component';
import { PlaceDetailsComponent } from './Admin/place-details/place-details.component';
import { DesignationDetailsComponent } from './Admin/designation-details/designation-details.component';
import { DepartmentDetailsComponent } from './Admin/department-details/department-details.component';
import { FacultyDetailsComponent } from './Admin/faculty-details/faculty-details.component';
import { CoursetypeDetailsComponent } from './Admin/coursetype-details/coursetype-details.component';
import { PlaceComponent } from './Admin/place/place.component';
import { DepartmentComponent } from './Admin/department/department.component';
import { CoursetypeComponent } from './Admin/coursetype/coursetype.component';
import { DesignationComponent } from './Admin/designation/designation.component';
import { FacultyComponent } from './Admin/faculty/faculty.component';
import { CourseDetailsComponent } from './Admin/course-details/course-details.component';
import { CourseComponent } from './Admin/course/course.component';
import { BatchDetailsComponent } from './Admin/batch-details/batch-details.component';
import { BatchComponent } from './Admin/batch/batch.component';
import { StudentDetailsComponent } from './Admin/student-details/student-details.component';
import { StudentComponent } from './Admin/student/student.component';
import { SemesterDetailsComponent } from './Admin/semester-details/semester-details.component';
import { SemesterComponent } from './Admin/semester/semester.component';
import { HomeComponent } from './Admin/home/home.component';
import { BatchEditComponent } from './Admin/batch-edit/batch-edit.component';
import { DistrictEditComponent } from './Admin/district-edit/district-edit.component';
import { DepartmentEditComponent } from './Admin/department-edit/department-edit.component';
import { PlaceEditComponent } from './Admin/place-edit/place-edit.component';
import { FacultyEditComponent } from './Admin/faculty-edit/faculty-edit.component';
import { FacultyViewMoreComponent } from './Admin/faculty-view-more/faculty-view-more.component';
import { CourseEditComponent } from './Admin/course-edit/course-edit.component';
import { SemesterEditComponent } from './Admin/semester-edit/semester-edit.component';
import { StudentEditComponent } from './Admin/student-edit/student-edit.component';
import { StudentViewMoreComponent } from './Admin/student-view-more/student-view-more.component';
import { FacultyVerifyComponent } from './Admin/faculty-verify/faculty-verify.component';
import { StudentVerifyComponent } from './Admin/student-verify/student-verify.component';
import { FacultyVerifyDetailsComponent } from './Admin/faculty-verify-details/faculty-verify-details.component';
import { StudentVerifyDetailsComponent } from './Admin/student-verify-details/student-verify-details.component';
import { GuestNavbarComponent } from './Guest/guest-navbar/guest-navbar.component';
import { UsersLoginComponent } from './Guest/users-login/users-login.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { ContactComponent } from './Guest/contact/contact.component';
import { FacultyLoginComponent } from './Guest/faculty-login/faculty-login.component';
import { AdminLoginComponent } from './Guest/admin-login/admin-login.component';
import { AboutComponent } from './Guest/about/about.component';
import { HodNavbarComponent } from './HOD/hod-navbar/hod-navbar.component';
import { ClassDetailsComponent } from './HOD/class-details/class-details.component';
import { ClassComponent } from './HOD/class/class.component';
import { SubjectDetailsComponent } from './HOD/subject-details/subject-details.component';
import { SubjectComponent } from './HOD/subject/subject.component';
import { ClassEditComponent } from './HOD/class-edit/class-edit.component';
import { HProfileComponent } from './HOD/hprofile/hprofile.component';
import { EditHProfileComponent } from './HOD/edit-hprofile/edit-hprofile.component';
import { HStudentDetailsComponent } from './HOD/hstudent-details/hstudent-details.component';
import { HFacultyDetailsComponent } from './HOD/hfaculty-details/hfaculty-details.component';
import { HFacultyComponent } from './HOD/hfaculty/hfaculty.component';
import { HStudentComponent } from './HOD/hstudent/hstudent.component';
import { HViewComplaintsComponent } from './HOD/hview-complaints/hview-complaints.component';
import { HRegisterComplaintsComponent } from './HOD/hregister-complaints/hregister-complaints.component';
import { HComplaintsComponent } from './HOD/hcomplaints/hcomplaints.component';
import { HComplaintRenspondComponent } from './HOD/hcomplaint-renspond/hcomplaint-renspond.component';
import { TeacherNavbarComponent } from './Teacher/teacher-navbar/teacher-navbar.component';
import { TeacherHomeComponent } from './Teacher/teacher-home/teacher-home.component';
import { TeacherProfileComponent } from './Teacher/teacher-profile/teacher-profile.component';
import { TeacherEditProfileComponent } from './Teacher/teacher-edit-profile/teacher-edit-profile.component';
import { TeacherClassComponent } from './Teacher/teacher-class/teacher-class.component';
import { TeacherStreamComponent } from './Teacher/teacher-stream/teacher-stream.component';
import { TeacherClassworkComponent } from './Teacher/teacher-classwork/teacher-classwork.component';
import { SubjectEditComponent } from './HOD/subject-edit/subject-edit.component';
import { TeacherClassStudentsComponent } from './Teacher/teacher-class-students/teacher-class-students.component';
import { TeacherNotesRegistrationComponent } from './Teacher/teacher-notes-registration/teacher-notes-registration.component';
import { TeacherViewNotesComponent } from './Teacher/teacher-view-notes/teacher-view-notes.component';
import { TeacherEditNotesComponent } from './Teacher/teacher-edit-notes/teacher-edit-notes.component';
import { StudentNavbarComponent } from './Student/student-navbar/student-navbar.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';
import { StudentProfileEditComponent } from './Student/student-profile-edit/student-profile-edit.component';
import { StudentChangePasswordComponent } from './Student/student-change-password/student-change-password.component';
import { StudentSemesterComponent } from './Student/student-semester/student-semester.component';
import { StudentStreamComponent } from './Student/student-stream/student-stream.component';
import { StudentStreamViewComponent } from './Student/student-stream-view/student-stream-view.component';
import { StudentClassworkComponent } from './Student/student-classwork/student-classwork.component';
import { StudentMyComplaintsComponent } from './Student/student-my-complaints/student-my-complaints.component';
import { StudentRegisterComplaintComponent } from './Student/student-register-complaint/student-register-complaint.component';
import { StudentSubmitClassworkComponent } from './Student/student-submit-classwork/student-submit-classwork.component';
import { StudentMyTeachersComponent } from './Student/student-my-teachers/student-my-teachers.component';
import { TeacherClassworkDetailsComponent } from './Teacher/teacher-classwork-details/teacher-classwork-details.component';
import { TeacherMyComplaintsComponent } from './Teacher/teacher-my-complaints/teacher-my-complaints.component';
import { TeacherViewStudentComponent } from './Teacher/teacher-view-student/teacher-view-student.component';
import { TeacherStudentDetailsComponent } from './Teacher/teacher-student-details/teacher-student-details.component';
import { TeacherRegisterComplaintComponent } from './Teacher/teacher-register-complaint/teacher-register-complaint.component';
import { TeacherComplaintsViewComponent } from './Teacher/teacher-complaints-view/teacher-complaints-view.component';
import { TeacherComplaintRespondComponent } from './Teacher/teacher-complaint-respond/teacher-complaint-respond.component';
import { TeacherChangePasswordComponent } from './Teacher/teacher-change-password/teacher-change-password.component';
import { HODChangePasswordComponent } from './HOD/hodchange-password/hodchange-password.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { AdminEditProfileComponent } from './Admin/admin-edit-profile/admin-edit-profile.component';
import { AdminComplaintViewComponent } from './Admin/admin-complaint-view/admin-complaint-view.component';
import { HODhomeComponent } from './HOD/hodhome/hodhome.component';
import { TeacherReportsComponent } from './Teacher/teacher-reports/teacher-reports.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { TeacherRegisterClassworkComponent } from './Teacher/teacher-register-classwork/teacher-register-classwork.component';
import { AdminChangePasswordComponent } from './Admin/admin-change-password/admin-change-password.component';
import { AdminComplaintsComponent } from './Admin/admin-complaints/admin-complaints.component';
import { HodReportComponent } from './HOD/hod-report/hod-report.component';
import { AdminReportComponent } from './Admin/admin-report/admin-report.component';


const routes: Routes = [
  {path:'',component:GuestNavbarComponent,
  children:[
          {path:'ghome',component:GuestHomeComponent},
          {path:'slogin',component:UsersLoginComponent},
          {path:'contact',component:ContactComponent},
          {path:'flogin',component:FacultyLoginComponent},
          {path:'alogin',component:AdminLoginComponent},
          {path:'about',component:AboutComponent},
          {path:'',redirectTo:'ghome',pathMatch:'full'}
  ]},
  {path:'Admin',component:AdminNavigationComponent,
children:[
          {path:'ahome',component:HomeComponent},
          {path:'adminprofile',component:AdminProfileComponent},
          {path:'adminprofileedit',component:AdminEditProfileComponent},
          {path:'viewdistrict',component:DistrictDetailsComponent},
          {path:'adminchangepass',component:AdminChangePasswordComponent},
          {path:'district',component:DistrictComponent},
          {path:'districtedit/:id',component:DistrictEditComponent},
          {path:'viewplace',component:PlaceDetailsComponent},
          {path: 'place', component: PlaceComponent},
          {path:'editplace/:id',component:PlaceEditComponent},
          {path:'designationview',component:DesignationDetailsComponent},
          {path:'designation',component:DesignationComponent},
          {path:'departmentview',component:DepartmentDetailsComponent},
          {path:'departmenttedit/:id',component:DepartmentEditComponent},
          {path: 'department', component:DepartmentComponent},
          {path:'facultyview',component:FacultyDetailsComponent},
          {path:'faculty',component:FacultyComponent},
          {path:'facultyedit/:id',component:FacultyEditComponent},
          {path:'facultymore/:id',component:FacultyViewMoreComponent},
          {path:'coursetype',component:CoursetypeComponent},
          {path:'coursetypeview',component:CoursetypeDetailsComponent},
          {path:'courseview',component:CourseDetailsComponent},
          {path:'editcourse/:id',component:CourseEditComponent},
          {path:'course',component:CourseComponent},
          {path:'batchview',component:BatchDetailsComponent},
          {path:'batch',component:BatchComponent},
          {path:'batchedit/:id',component:BatchEditComponent},
          {path:'studentview',component:StudentDetailsComponent},
          {path:'student',component:StudentComponent},
          {path:'semesterview',component:SemesterDetailsComponent},
          {path:'studentedit/:id',component:StudentEditComponent},
          {path:'studentmore/:id',component:StudentViewMoreComponent},
          {path:'semester',component:SemesterComponent},
          {path:'editsemester/:id',component:SemesterEditComponent},
          {path:'facultyverifyview',component:FacultyVerifyDetailsComponent},
          {path:'facultyverify/:id',component:FacultyVerifyComponent},
          {path:'studentverifyview',component:StudentVerifyDetailsComponent},
          {path:'studentverify/:id',component:StudentVerifyComponent},
          {path:'acomplaintview/:id',component:AdminComplaintViewComponent},
          {path:'addadmin',component:AddAdminComponent},
          {path:'acomplaints',component:AdminComplaintsComponent},
          {path:'areport',component:AdminReportComponent},
          {path:'',redirectTo:'ahome',pathMatch:'full'}
        ]},
  {path:'HOD',component:HodNavbarComponent,
  children:[
          {path:'hodhome',component:HODhomeComponent},
          {path:'hodprofile',component:HProfileComponent},
          {path:'edithodprofile',component:EditHProfileComponent},
          {path:'hchangepassword',component:HODChangePasswordComponent},
          {path:'viewclass',component:ClassDetailsComponent},
          {path:'class',component:ClassComponent},
          {path:'editclass/:id',component:ClassEditComponent},
          {path:'viewsubject',component:SubjectDetailsComponent},
          {path:'subject',component:SubjectComponent},
          {path:'hviewstudent',component:HStudentDetailsComponent},
          {path:'hstudentmore/:id',component:HStudentComponent},
          {path:'hviewfaculty',component:HFacultyDetailsComponent},
          {path:'hfacultymore/:id',component:HFacultyComponent},
          {path:'hviewcomplaints',component:HViewComplaintsComponent},
          {path:'complaintrespond/:id',component:HComplaintRenspondComponent},
          {path:'hcomplaints',component:HComplaintsComponent},
          {path:'hregcomplaints',component:HRegisterComplaintsComponent},
          {path:'hsubjectedit/:id',component:SubjectEditComponent},
          {path:'hreport',component:HodReportComponent},
          {path:'',redirectTo:'hodhome',pathMatch:'full'}
  ]},
  {path:'Teacher',component:TeacherNavbarComponent,
  children:[
          {path:'thome',component:TeacherHomeComponent},
          {path:'teacherprofile',component:TeacherProfileComponent},
          {path:'editteacherprofile',component:TeacherEditProfileComponent},
          {path:'tchangepass',component:TeacherChangePasswordComponent},
          {path:'teacherclass',component:TeacherClassComponent,
        children:[
                {path:'tstream/:id',component:TeacherStreamComponent},
                {path:'tclasswork/:id',component:TeacherClassworkComponent},
                {path:'tclassstudents/:id',component:TeacherClassStudentsComponent},
                {path:'tregnotes/:id',component:TeacherNotesRegistrationComponent},
                {path:'tnoteview/:id',component:TeacherViewNotesComponent},
                {path:'teditnote/:id',component:TeacherEditNotesComponent},
                {path:'tclassworkdetails/:id',component:TeacherClassworkDetailsComponent},
                {path:'tclassworkreg/:id',component:TeacherRegisterClassworkComponent},
                {path:'',redirectTo:'tstream',pathMatch:'full'}
        ]},
          {path:'tmycomplaints',component:TeacherMyComplaintsComponent},
          {path:'tregcomplaint',component:TeacherRegisterComplaintComponent},
          {path:'tviewcomplaint',component:TeacherComplaintsViewComponent},
          {path:'tcomplaintrespond/:id',component:TeacherComplaintRespondComponent},
          {path:'tstudentsview',component:TeacherViewStudentComponent},
          {path:'tstudentmore/:id',component:TeacherStudentDetailsComponent},
          {path:'treports',component:TeacherReportsComponent},
          {path:'',redirectTo:'thome',pathMatch:'full'}
  ]},
  {path:'student',component:StudentNavbarComponent,
  children:[
        {path:'shome',component:StudentHomeComponent},
        {path:'sprofile',component:StudentProfileComponent},
        {path:'editsprofile',component:StudentProfileEditComponent},
        {path:'schangepass',component:StudentChangePasswordComponent},
        {path:'ssem',component:StudentSemesterComponent,
        children:[
                {path:'sstream/:id',component:StudentStreamComponent},
                {path:'sstreamview/:id',component:StudentStreamViewComponent},
                {path:'sclasswork/:id',component:StudentClassworkComponent},
                {path:'ssubmitclasswork/:id',component:StudentSubmitClassworkComponent},
                {path:'',redirectTo:'sstream',pathMatch:'full'}
        ]},
        {path:'smycomplaints',component:StudentMyComplaintsComponent},
        {path:'sregcomplaint',component:StudentRegisterComplaintComponent},
        {path:'smyteachers',component:StudentMyTeachersComponent},
        {path:'',redirectTo:'shome',pathMatch:'full'}
  ]},
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
