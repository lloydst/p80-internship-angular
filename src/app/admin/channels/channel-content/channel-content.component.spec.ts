import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelContentComponent } from './channel-content.component';
import { ListingComponentsComponent } from '../listing-components/listing-components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';



describe('ChannelContentComponent', () => {
    let component: ChannelContentComponent;
    let fixture: ComponentFixture<ChannelContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
            declarations: [ChannelContentComponent, ListingComponentsComponent],
            providers: [DataService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChannelContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
