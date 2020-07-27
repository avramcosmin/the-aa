import {TestBed} from '@angular/core/testing';

import {EmailService} from './email.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EmailServiceMock} from './email-service.mock';

describe('TmpServiceService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: EmailService,
          useClass: EmailServiceMock
        }
      ]
    });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#isEmailAlreadyUsed should return value from observable',
    (done: DoneFn) => {
      service.isEmailAlreadyUsed('some@email.com').subscribe(value => {
        expect(value).toEqual(null);
        done();
      });
    });
});
