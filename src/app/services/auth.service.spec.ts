import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
//import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [AuthService]
        });
    });

    it('should be created', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));
});
