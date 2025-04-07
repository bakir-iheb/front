import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService{
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/destinations';

  private getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Get all Destination (authenticated users)
  getDestination(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL, {
      headers: this.getAuthHeaders()
    });
  }

  // Get single any (authenticated users)
  getDestinationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Create any (admin only)
  createDestination(any: FormData): Observable<any> {
    return this.http.post<any>(this.API_URL, any, {
      headers: this.getAuthHeaders()
    });
  }

  // Update any (admin only)
  updateDestination(id: string, any: FormData): Observable<any> {
    return this.http.put<any>(`${this.API_URL}${id}`, any, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete any (admin only)
  deleteDestination(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}