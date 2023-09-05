import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { tradeReducer } from './store/trade.reducer';
import { TradeEffects } from './store/trade.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      { trade: tradeReducer }
    ),
    EffectsModule.forRoot(
      [TradeEffects]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
