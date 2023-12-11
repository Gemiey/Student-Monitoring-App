import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.services';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
