import { TestBed, inject } from '@angular/core/testing';
import { TicketService } from './ticket.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [TicketService]
    });
  });

  it('should be created', inject([TicketService], (service: TicketService) => {
    expect(service).toBeTruthy();
  }));
});
