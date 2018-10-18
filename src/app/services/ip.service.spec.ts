import { TestBed, inject } from '@angular/core/testing';
import { IpService } from './ip.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('IpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [IpService]
    });
  });

  it('should be created', inject([IpService], (service: IpService) => {
    expect(service).toBeTruthy();
  }));
});
