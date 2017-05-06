import { PokedataNg2Page } from './app.po';

describe('pokedata-ng2 App', () => {
  let page: PokedataNg2Page;

  beforeEach(() => {
    page = new PokedataNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
