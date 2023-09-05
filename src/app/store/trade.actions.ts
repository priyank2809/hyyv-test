import { createAction, props } from '@ngrx/store';
import { Trade } from './trade.model';

export const loadTrades = createAction('[Trade] Load Trades');
export const tradesLoaded = createAction('[Trade] Trades Loaded', props<{ trades: Trade[] }>());

export const searchTrades = createAction(
  '[Trade] Search Trades',
  props<{ location: string; trade: string[] }>()
);
