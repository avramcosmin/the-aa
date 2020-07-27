import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UniqueEmailAsyncValidator} from './unique-email.async-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  readonly regex = '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';
  readonly loginForm = this.fb.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.regex)
        ],
        [
          this.uniqueEmailAsyncValidator
        ],
        {updateOn: 'blur'}
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]
      ]
    }
  );

  constructor(private fb: FormBuilder,
              private uniqueEmailAsyncValidator: UniqueEmailAsyncValidator) {
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
