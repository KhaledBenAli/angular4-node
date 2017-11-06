import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';

@Component({
  selector: 'jj-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  private  jobs = [];
  private error = '';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    
    this.jobService.getJobs().subscribe(
      data => this.jobs = data,
      error => {
        console.error(error);
        this.error = error;
      }
    );
  }

}
