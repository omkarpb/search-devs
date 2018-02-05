import { SearchDevsPage } from './app.po';

describe('search-devs App', function() {
  let page: SearchDevsPage;

  beforeEach(() => {
    page = new SearchDevsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
