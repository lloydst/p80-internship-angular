import { AppPage } from './app.po';

describe('Homepage', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have some navigation', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('admin');
  });
});
