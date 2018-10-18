import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageUploadComponent } from './image-upload.component';

import { FileUploadModule } from 'ng2-file-upload';
import { ImageViewComponent } from '../image-view/image-view.component';
import { FileService } from '../../../services/file.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImageUploadComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FileUploadModule,
                HttpClientTestingModule
            ],
            declarations: [
                ImageUploadComponent,
                ImageViewComponent
            ],
            providers: [FileService]
        }).compileComponents();
    }));

    it('should show form to upload images to the db', async(() => {
        const fixture = TestBed.createComponent(ImageUploadComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(ImageUploadComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(ImageUploadComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
