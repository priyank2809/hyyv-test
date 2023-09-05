import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './communities-routing.module';
import { CommunitiesComponent } from './communities.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    
  ],
  declarations: [
    CommunitiesComponent
  ],
  providers: [
  ]

})
export class CommunitiesModule { }
