import { SkycastAppPage } from './app.po';

describe('skycast-app App', () => {
  let page: SkycastAppPage;

  beforeEach(() => {
    page = new SkycastAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
