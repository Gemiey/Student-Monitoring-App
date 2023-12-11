import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Student } from "./student.model";
export class StudentService {
  private students: Student[] = [
    new Student('Mohamed', 'Grade 5', '(239) 816-9029', 'Cairo', ''),
    new Student('Salma','Grade 6','01020355488','Giza','')
  ];
  getStudents() {
    // call slice to get a copy of the array, to prevent changing our og recipe list.
    return this.students.slice();
  }

}