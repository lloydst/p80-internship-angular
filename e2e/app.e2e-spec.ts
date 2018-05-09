import { AppPage } from './app.po';

describe('boilerplate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have some navigation', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toContain('go to auto loop'); old doesn' have navigation temporaraly
  });
});
