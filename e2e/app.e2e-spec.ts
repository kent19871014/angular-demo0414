import { Demo0414Page } from './app.po';

describe('demo0414 App', () => {
  let page: Demo0414Page;

  beforeEach(() => {
    page = new Demo0414Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
