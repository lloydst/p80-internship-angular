import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSideNavComponent } from './admin-side-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';


describe('AdminSideNavComponent', () => {
    let component: AdminSideNavComponent;
    let fixture: ComponentFixture<AdminSideNavComponent>;
    let navLinks;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminSideNavComponent],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminSideNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        // get a list of the router links and check if it navigates to the right endpoint
        navLinks = fixture.debugElement.queryAll(By.css('a'));
    });

    it('should create', () => {
        // should always pass
        expect(component).toBeTruthy();
    });
    it('should have atleast these paths', () => {
        expect(navLinks.length).toBe(7, '7 router links');
        expect(navLinks[0].properties.href).toBe('/admin');
        expect(navLinks[1].properties.href).toBe('/algemeen');
        expect(navLinks[2].properties.href).toBe('/components/entrance');
        expect(navLinks[3].properties.href).toBe('/channels');
        expect(navLinks[4].properties.href).toBe('/upload');
        // dont forget to navigate back in between
    });
    it('should expand when the last is clicked', () => {
        // check if classes change
        expect(component).toBeTruthy();
    });
});
