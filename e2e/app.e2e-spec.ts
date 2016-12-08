import { TouchGesturesPage } from './app.po';

describe('touch-gestures App', function() {
  let page: TouchGesturesPage;

  beforeEach(() => {
    page = new TouchGesturesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
