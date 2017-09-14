import { AngularControllerPage } from './app.po';

describe('angular-controller App', () => {
  let page: AngularControllerPage;

  beforeEach(() => {
    page = new AngularControllerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
