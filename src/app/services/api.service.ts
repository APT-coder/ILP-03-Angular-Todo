import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  addtoFirebase(data:any) {
    return this.http.get(`https://library-3c238-default-rtdb.firebaseio.com/`,data);  
  }

  constructor(private http: HttpClient) { }

  fetchData(apiUrl:string): Observable<any> {
    return this.http.get<any>(apiUrl)
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    throw error;  // You can customize error handling as per your needs
  }
}
