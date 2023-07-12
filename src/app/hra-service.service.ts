import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsertedSuccess, UniqueConstraintError, HraInterface ,Read} from './hra-interface';

@Injectable({
  providedIn: 'root'
})
export class HraServiceService {


  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = "http://localhost:3600/";

  Insert(Details: HraInterface):
    Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'hra/Insert',
      Details,
      { headers: this.headers }
  );
  }
  Delete(catg: String): Observable<InsertedSuccess> {
    console.log(`${this.url}hra/Delete${catg}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}hra/Delete${catg}`
    );
  }
  Read(catg: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}hra/Read${catg}`);
  }
  Update(catg:String, Details: HraInterface) {
    return this.http.put(`${this.url}hra/Update${catg}`, Details, {
      headers: this.headers,
    });
  }
  Read1(season:string):Observable<Read>{
    return this.http.get<Read>(`${this.url}example/Read${season}`);

  }
}
