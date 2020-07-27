import {Observable, of} from 'rxjs';

export class EmailServiceMock {
  isEmailAlreadyUsed(emailAddress: string): Observable<any> {
    return of(null);
  }
}
