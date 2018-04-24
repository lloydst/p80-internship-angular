import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { Website } from '../models/website';
import { Message } from '../models/message';
// let httpClientSpy: { get: jasmine.Spy };

describe('DataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dataService: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [DataService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    dataService = TestBed.get(DataService);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
  describe('#websites', () => {
    let expectedData: Website
    beforeEach(() => {
      dataService = TestBed.get(DataService);
      expectedData = {  name: 'poort80', url: "https:www.poort80.nl", visable:false };
    });
    it('should get single', ()=>{
     
      dataService.getWebsite(expectedData.name).subscribe(
        website => expect(website).toEqual(expectedData, 'should return expected heroes'),
        fail
      );

      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne('/api/websites/poort80');
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedData); 
    })
    it('should get all', ()=>{
      dataService.getAllWebsites().subscribe( 
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/websites');
        expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush([expectedData]); 
    })
    it('should create', () => {
      dataService.createWebsite(expectedData).subscribe(
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/websites');
        expect(req.request.method).toEqual('POST');
    })
    it('should update', ()=>{
      dataService.updateWebsite(expectedData.name, expectedData).subscribe(
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/websites/poort80');
        expect(req.request.method).toEqual('PUT');
    })
    it('should delete', ()=>{
      dataService.deleteWebsite(expectedData.name).subscribe(
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/websites/poort80');
        expect(req.request.method).toEqual('DELETE');
    })
  })
  describe('#messages', () => {
    let expectedData: Message
    beforeEach(() => {
      dataService = TestBed.get(DataService);
      expectedData = { 
        message: 'test',
        showFrom: "2018-04-13T06:09",
        showTill: "2018-04-18T06:09",
        imgLink:"/images/generic-image-placeholder.png",
        img: true,
      identifier: 'some-simple-identifier'  };
    });
    it('should get single', ()=>{
     
      dataService.getMessage(expectedData.message).subscribe(
        message => expect(message).toEqual(expectedData, 'should return expected heroes'),
        fail
      );
      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne('/api/messages/' + expectedData.message);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedData); 
    })
    it('should get all', ()=>{
      dataService.getAllMessage().subscribe( 
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/messages');
        expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush([expectedData]); 
    })
    it('should create', () => {
      dataService.createMessage(expectedData).subscribe(
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/messages');
        expect(req.request.method).toEqual('POST');
    })
    it('should update', ()=>{
      dataService.updateMessage(expectedData.message, expectedData).subscribe(
        message => expect(message).toBeTruthy())
        const req = httpTestingController.expectOne('/api/messages/'+ expectedData.message);
        expect(req.request.method).toEqual('PUT');
    })
    it('should delete', ()=>{
      dataService.deleteMessage(expectedData.message).subscribe(
        website => expect(website).toBeTruthy())
        const req = httpTestingController.expectOne('/api/messages/'+ expectedData.message);
        expect(req.request.method).toEqual('DELETE');
    })
  });
})
