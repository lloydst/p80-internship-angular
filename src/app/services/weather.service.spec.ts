import { TestBed, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
    // let httpMock: HttpTestingController;
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WeatherService]
        });
    });

    it('should be created', inject([WeatherService], (service: WeatherService) => {
        expect(service.getWeather()).toBeTruthy();
    }));
});
