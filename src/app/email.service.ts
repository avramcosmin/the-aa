import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailService {
  constructor(private http: HttpClient) {
  }

  isEmailAlreadyUsed(emailAddress: string): Observable<any> {
    return this.http
      .get(`https://mock-api-v2.getsandbox.com/users/${emailAddress}`);
  }
}
