import { LaundryOnlinePage } from './app.po';

describe('laundry-online App', () => {
  let page: LaundryOnlinePage;

  beforeEach(() => {
    page = new LaundryOnlinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
