import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';
import { Observable, pipe, switchMap } from 'rxjs';
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
    return this.getCDs()
    .pipe(
      switchMap(cds =>
        {
          let lastId = 0;
          cds.forEach(cd => {lastId = (cd.id > lastId ? cd.id : lastId);});
          newCD.id = lastId+1;
          return this.http.post<CD>('http://localhost:3001/CD',newCD);
        }
      )
    )
  }
}
