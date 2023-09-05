import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TradesService } from '../services/trades.service';
import * as TradeActions from './trade.actions';

@Injectable()
export class TradeEffects {
  constructor(private actions$: Actions, private tradesService: TradesService) {}

  loadTrades$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TradeActions.loadTrades),
      switchMap(() =>
        this.tradesService.getTrades().pipe(
          map((trades) => TradeActions.tradesLoaded({ trades })),
          catchError(() => of({ type: 'Error' }))
        )
      )
    )
  );

  searchTrades$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TradeActions.searchTrades),
      switchMap((payload) =>
        this.tradesService.searchTrades(payload.location, payload.trade).pipe(
          map((trades) => TradeActions.tradesLoaded({ trades })),
          catchError(() => of({ type: 'Error' }))
        )
      )
    )
  );
}
