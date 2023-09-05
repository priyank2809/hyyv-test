import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './tradies-routing.module';
import { TradiesComponent } from './tradies.component';



import { TradesService} from '../services/trades.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    
  ],
  declarations: [
    TradiesComponent
  ],
  providers: [
    TradesService
  ]

})
export class TradiesModule { }
