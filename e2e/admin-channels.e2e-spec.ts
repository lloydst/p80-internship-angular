import { AdminChannelPage } from './admin-channels.po';
import { browser } from 'protractor';

describe('admin-channels', () => {
  let page: AdminChannelPage;

    beforeEach(() => {
        page = new AdminChannelPage();
        page.navigateTo()
        
    });
   
    it('should navigate to /admin/channels/meeting', () => {
        expect( page.getLinkText()).toContain('/admin/channels/new')
    });
    
});
