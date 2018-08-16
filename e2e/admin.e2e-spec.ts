import { AdminPage } from './admin.po';

describe('boilerplate App', () => {
    let page: AdminPage;

    beforeEach(() => {
        page = new AdminPage();
    });

    it('AdminsideNavComponent should have some Links', () => {
        page.navigateTo();
        expect(page.getLinkText()).toContain('/admin');
    });
});
