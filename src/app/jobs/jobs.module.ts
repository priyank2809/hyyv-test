import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    
  ],
  declarations: [
    JobsComponent
  ],
  providers: [
  ]

})
export class JobsModule { }
