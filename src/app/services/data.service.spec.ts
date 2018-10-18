import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';



describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [DataService, CookieService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
