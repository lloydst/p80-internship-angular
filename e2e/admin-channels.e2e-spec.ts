import { AdminChannelPage } from './admin-channels.po';
import { browser } from 'protractor';

describe('admin-channels', () => {
  let page: AdminChannelPage;

    beforeEach(() => {
        page = new AdminChannelPage();
        page.navigateTo('entrance');
    });

    it('AdminChannelsComponent should have a secondary nav', () => {
        expect(page.getLinkText().count()).toEqual(3);
    });
    it('should point at entrance', () => {
        expect(page.getLinkText().get(0).getText()).toEqual('entrance');
    });
    it('should navigate to /admin/channels/entrance', () => {
        expect( page.getLinkText().get(0).click()).toEqual(page.navigateTo('entrance'))
    });
    it('should point at event', () => {
        expect(page.getLinkText().get(1).getText()).toEqual('event');
    });
    it('should navigate to /admin/channels/event', () => {
        expect( page.getLinkText().get(1).click()).toEqual(page.navigateTo('event'))
    });
    it('should point at meeting', () => {
        expect(page.getLinkText().get(2).getText()).toEqual('meeting');
    });
    it('should navigate to /admin/channels/meeting', () => {
        expect( page.getLinkText().get(2).click()).toEqual(page.navigateTo('meeting'))
    });
});
