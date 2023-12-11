import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentService } from '../student.services';
import { Student } from '../student.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [StudentService]

})
export class ProfileComponent {
  student: any;
  @Input() studentWasSelected = new EventEmitter<Student>();

  id: number;
  status = 'online';
  isDropdownVisible = false;
  students: Student[];

  constructor(private studentService: StudentService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.students = this.studentService.getStudents();
      const studentId = +params['id'];
      this.student = this.students[studentId];
      console.log('student:',this.student)
    });
    this.studentWasSelected.subscribe((selectedStudent: Student) => {
      this.student = selectedStudent;
    });
    console.log('profile',this.students)

  }
enableEdit() {

// Assuming 'name' is the id of the input element
  const nameInput: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement;

  if (nameInput) {
      // Enable the input element
      nameInput.disabled = false;
  }
  else nameInput.disabled = true;
  const emailInput: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;

  if (emailInput) {
      // Enable the input element
      emailInput.disabled = false;
  }
  else emailInput.disabled = true;

  const phoneInput: HTMLInputElement | null = document.getElementById('phone') as HTMLInputElement;

  if (phoneInput) {
      // Enable the input element
      phoneInput.disabled = false;
  }
  else phoneInput.disabled = true;

  const addressInput: HTMLInputElement | null = document.getElementById('address') as HTMLInputElement;

  if (addressInput) {
      // Enable the input element
      addressInput.disabled = false;
  }
  else addressInput.disabled = true;
}
saveChanges(){
  const nameInput: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement;
  const emailInput: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
  const phoneInput: HTMLInputElement | null = document.getElementById('phone') as HTMLInputElement;
  const addressInput: HTMLInputElement | null = document.getElementById('address') as HTMLInputElement;

  nameInput.disabled = true;
  emailInput.disabled = true;
  phoneInput.disabled = true;
  addressInput.disabled = true;


}
 toggleStatusDropdown() {
  
  const statusDropdown = document.getElementById('statusDropdown');
  if (statusDropdown.style.display === 'none' || !statusDropdown.style.display) {
    statusDropdown.style.display = 'block';
  } else {
    statusDropdown.style.display = 'none';
  }
}

 setStatus(status) {
  this.status = status;
  let whiteDot;
  let coloredDot;
  const profileIcon = document.getElementById('profileIcon');
  console.log(`Status set to: ${status}`);
  // You can perform additional actions based on the selected status here


  // Remove existing dots
  if (whiteDot && coloredDot) {
    profileIcon.removeChild(whiteDot);
    profileIcon.removeChild(coloredDot);
  }

  // Create and append the new dots for the selected status
  whiteDot = document.createElement('div');
  whiteDot.className = 'whiteDot';

  coloredDot = document.createElement('div');
  coloredDot.className = 'dot';

  if (status === 'idle') {
    coloredDot.classList.add('idle');
  } else if (status === 'offline') {
    coloredDot.classList.add('offline');
  } else {
    coloredDot.classList.add('online');
  }

  profileIcon.appendChild(whiteDot);
  profileIcon.appendChild(coloredDot);

  const statusDropdown = document.getElementById('statusDropdown');
  statusDropdown.style.display = 'none'; // Close dropdown after selecting a status
}
getStatusClass() {
  return {
    'online': this.status === 'online',
    'idle': this.status === 'idle',
    'offline': this.status === 'offline'
  };
}

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

}
