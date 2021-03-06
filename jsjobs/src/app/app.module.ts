import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import {JobService} from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
