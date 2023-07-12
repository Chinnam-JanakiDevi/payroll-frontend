import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsertedSuccess, UniqueConstraintError, PfInterface, Read } from './pf-interface';

@Injectable({
  providedIn: 'root'
})
export class PfServiceService {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = "http://localhost:3600/";

  Insert(Details: PfInterface):
    Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'pf/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Delete(catg: String): Observable<InsertedSuccess> {
    console.log(`${this.url}pf/Delete${catg}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}hra/Delete${catg}`
    );
  }
  Read(catg: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}pf/Read${catg}`);
  }
  Update(catg:String, Details: PfInterface) {
    return this.http.put(`${this.url}pf/Update${catg}`, Details, {
      headers: this.headers,
    });
  }
}
