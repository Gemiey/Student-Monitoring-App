import { Component } from '@angular/core';
import { Data } from '../activity.model';
@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {
  data: Data[] = [
    new Data('opened a video','v','Jan 7 at 11:35am'),
    new Data ('started a course','c','Nov 8 at 12:22am'),
    new Data ('completed a course','g','Aug 5 at 04:15am')

  ];
  name = 'Mohamed';
  grade = 'Grade 5';


  // getFilter(data) {
  //   return data.filter(item => item.activity_type === 'v');
  // }
  filteredData: Data[] = this.data; // Initialize the filteredData array with all data
  filterVideo() {
    this.filteredData = this.data.filter(item => item.activity_type === 'v');
  }
  filterOpen() {
    this.filteredData = this.data.filter(item => item.activity_type === 'c');
  }
  filterComplete() {
    this.filteredData = this.data.filter(item => item.activity_type === 'g');
  }
  reload(){
    window.location.reload();
    console.log('aa')
  }
  
}

