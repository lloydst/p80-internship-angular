import { TestBed, inject } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [NewsService]
    });
  });

  it('should be created', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
});
