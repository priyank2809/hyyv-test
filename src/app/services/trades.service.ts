import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../store/trade.model';

@Injectable({
  providedIn: 'root',
})
export class TradesService {
  private apiUrl = 'https://block2-api-dev.azurewebsites.net/free-view';

  constructor(private http: HttpClient) {}

  getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiUrl}/trades`);
  }

  searchTrades(location: string, trade: string[]): Observable<Trade[]> {
    const payload = {
      data: {
        location,
        trade
      },
    };
    return this.http.post<Trade[]>(`${this.apiUrl}/find-tradie`, payload);
  }

  filterTrades(payload: any): Observable<Trade[]> {
    return this.http.post<Trade[]>(`${this.apiUrl}/find-tradie`, payload);
  }
}
