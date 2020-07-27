import {Injectable} from '@angular/core';
import {EmailService} from './email.service';
import {Observable, of} from 'rxjs';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UniqueEmailAsyncValidator {
  constructor(private emailService: EmailService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.emailService
      .isEmailAlreadyUsed(control.value)
      .pipe(
        map(
          isEmailAlreadyUsed => (isEmailAlreadyUsed ? {isEmailAlreadyUsed: true} : null)
        ),
        catchError(
          () => of(null)
        )
      );
  }
}
