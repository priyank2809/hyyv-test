import { createReducer, on } from '@ngrx/store';
import { tradesLoaded } from './trade.actions';
import { Trade } from './trade.model';

export interface TradeState {
  trades: Trade[];
}

export const initialState: TradeState = {
  trades: [],
};

export const tradeReducer = createReducer(
  initialState,
  on(tradesLoaded, (state, { trades }) => ({ ...state, trades }))
);
