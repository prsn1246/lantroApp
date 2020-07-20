import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('AuthService', () => {
  let service: AuthService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService]
    });
    service = TestBed.inject(AuthService);
    toastrService = TestBed.get(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
