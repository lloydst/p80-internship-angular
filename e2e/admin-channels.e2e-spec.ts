import { AdminChannelPage } from './admin-channels.po';
import { browser } from 'protractor';

describe('admin-channels', () => {
  let page: AdminChannelPage;

    beforeEach(() => {
        page = new AdminChannelPage();
        
    });
    // these tests detect whether /channels has a navigation bar
    /*
    it('should navigate to /admin/channels/meeting', () => {
        expect( page.getLinkText().get(2).click()).toEqual(page.navigateTo('meeting'))
    });
    */
});
