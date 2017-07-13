import { StarterCodePage } from './app.po';

describe('starter-code App', () => {
  let page: StarterCodePage;

  beforeEach(() => {
    page = new StarterCodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
