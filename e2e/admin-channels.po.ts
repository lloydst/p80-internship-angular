import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class AdminChannelPage {
  navigateTo(str) {
    return browser.get('/admin/channels/' +str);
  }

  getLinkText() {
    return element.all(by.tagName('.topnav a'));
  }
  getUrl() {
      return browser.getCurrentUrl()
  }
}
