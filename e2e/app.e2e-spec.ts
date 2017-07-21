import { Myvskproject51Page } from './app.po';

describe('myvskproject51 App', () => {
  let page: Myvskproject51Page;

  beforeEach(() => {
    page = new Myvskproject51Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
