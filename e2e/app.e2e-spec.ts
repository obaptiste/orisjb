import { ASpaceBetweenProjectPage } from './app.po';

describe('angular4-step-by-step-part01-your-first-component App', () => {
  let page: ASpaceBetweenProjectPage;

  beforeEach(() => {
    page = new ASpaceBetweenProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
