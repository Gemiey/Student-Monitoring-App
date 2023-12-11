import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  status='online';
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
  resetActiveTime() {
    console.log('Active time reset');
  }
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  preventDropdownClose(event: Event) {
    event.stopPropagation(); // Prevent the click event from reaching the document click listener
  }

}
