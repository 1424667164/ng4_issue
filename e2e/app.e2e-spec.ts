import { EletPage } from './app.po';

describe('elet App', () => {
  let page: EletPage;

  beforeEach(() => {
    page = new EletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
