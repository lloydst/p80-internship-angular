import { browser, element, by } from 'protractor';

export class AdminChannelPage {
    navigateTo() {
        return browser.get('/admin/channels/new');
    }
    getLinkText() {
        return element(by.className('admin-layout__topnav--link')).getAttribute('href');
    }
    getUrl() {
        return browser.getCurrentUrl();
    }
}
