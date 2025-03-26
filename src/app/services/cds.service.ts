import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  getCDs(): Observable<CD[]>{
    return this.http.get<CD[]>('http://localhost:3001/CD');
  }

  getCDByID(id: number): Observable<CD>{
    return this.http.get<CD>('http://localhost:3001/CD/' + id);
  }
  
  addCD(newCD: CD): Observable<CD>{
    newCD.id = Math.floor(Math.random() * 1000);
    return this.http.post<CD>('http://localhost:3001/CD',newCD);
  }
}
