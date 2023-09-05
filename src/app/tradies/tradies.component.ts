import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable, catchError, map, of } from 'rxjs';
import { Trade } from '../store/trade.model';
import { loadTrades } from '../store/trade.actions';
import { searchTrades } from '../store/trade.actions';

import { TradesService } from '../services/trades.service';
@Component({
  selector: 'app-tradies',
  templateUrl: './tradies.component.html',
  styleUrls: ['./tradies.component.scss']
})
export class TradiesComponent implements OnInit {

  searchForm: FormGroup;
  trades$: Observable<Trade[]>;

  traderLists: any[] = [];
  selectedTrades: any;
  userLists: any[] = [];
  selectedsubTrader = "";
  location = "";

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ trade: { trades: Trade[] } }>,
    private tradesService: TradesService
  ) {
    this.searchForm = this.formBuilder.group({
      location: '',
      trade: [],
    });

    this.trades$ = store.select('trade', 'trades');
  }

  async ngOnInit() {

    this.store.dispatch(loadTrades());

    try {
      await this.initData();
      await this.loadData();
    } catch (error) {

    } finally {
      if (this.traderLists && this.traderLists[0]) {
        this.traderClick({ ...this.traderLists[0] });
      }
    }

  }

  async initData() {

    this.traderLists = [];
    this.selectedTrades = {};
    this.userLists = [];
    this.selectedsubTrader = "";
    this.location = "";
  }

  async loadData() {
    this.traderLists = [];
    var i = 0;
    this.trades$.forEach(element => {
      if (element && element.length > 0) {
        element.forEach(ele => {
          if (ele.has_subtrade) {
            let tradeOBj = this.traderLists.find(p => p._id == ele._id);
            if (!tradeOBj) {
              this.traderLists.push({ ...ele });
              if (i == 0) {
                this.traderClick({ ...ele });
              }

              i++;
            }

          }
        });

      }

    });
    // console.log("this.traderLists", this.traderLists)
    this.traderLists.map(p => p.selected = false);

    // if(this.traderLists && this.traderLists[0]) {
    //   this.traderClick(this.traderLists[0]);
    // }
  }

  async onSubmit() {
    this.location = this.searchForm.value.location;
    await this.filterTraders();


    // const { location, trade } = this.searchForm.value;
    // this.store.dispatch(searchTrades({ location, trade }));
  }

  async traderClick(item: any) {

    this.userLists = [];
    this.selectedTrades = {};
    this.selectedsubTrader = "";
    this.location = "";
    this.searchForm.get("location")?.setValue("");

    this.traderLists.map(p => p.selected = false);
    var traderObj = this.traderLists.find(p => p._id == item._id);
    if (traderObj) {
      traderObj.selected = true;
    }

    this.selectedTrades = { ...item };

    await this.filterTraders();
  }

  async subTradeClick(item: any) {

    this.userLists = [];
    this.selectedsubTrader = "";
    this.location = "";
    this.searchForm.get("location")?.setValue("");

    this.selectedsubTrader = item;

    await this.filterTraders();


  }

  async filterTraders() {

    this.userLists = [];

    let postData: any = {};
    postData["data"] = {};
    postData["data"]["location"] = "";
    postData["data"]["trade"] = []

    if (this.location) {
      postData["data"]["location"] = this.location;
    }

    if (this.selectedTrades) {
      // console.log("this.selectedTrades", this.selectedTrades);
      postData["data"]["trade"].push(this.selectedTrades.name);
    }

    if (this.selectedsubTrader) {
      postData["data"]["trade"].push(this.selectedsubTrader);
    }

    // console.log("postData", postData)

    this.tradesService.filterTrades(postData)
      .subscribe(result => {
        if (result) {
          this.userLists = [];
          this.userLists = [...result];
          // console.log('this.userLists', this.userLists);
        }

      });

  }

  async reset() {
    this.searchForm.reset();
    try {
      await this.initData();
      await this.loadData();
    } catch (error) {

    } finally {

      if (this.traderLists && this.traderLists[0]) {
        this.traderClick({ ...this.traderLists[0] });
      }
    }
  }

}
