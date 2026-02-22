import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  // Uses the live production API URL
  private apiUrl = `${environment.baseurl}/admin/public/landing-content`;

  constructor(private http: HttpClient) { }

  getLandingData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}