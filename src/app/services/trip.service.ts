import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/trips';

  private getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Get all Trips
  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL, {
      headers: this.getAuthHeaders()
    });
  }

  // Get single Trip 
  getTripById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Create Trip (admin only)
  createTrip(trip: any): Observable<any> {
    return this.http.post<any>(this.API_URL, trip, {
      headers: this.getAuthHeaders()
    });
  }

  // Update Trip (admin only)
  updateTrip(id: string, trip: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, trip, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete Trip (admin only)
  deleteTrip(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Get trips between dates (authenticated users)
  getTripsBetweenDates(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/dates`, {
      params: { startDate, endDate },
      headers: this.getAuthHeaders()
    });
  }
}