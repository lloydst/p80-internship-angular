import { browser, by, element } from 'protractor';

export class AdminPage {
    navigateTo() {
        return browser.get('/admin');
    }

    getLinkText() {
        return element(by.className('menutext')).getAttribute('routerlink');
    }
}
