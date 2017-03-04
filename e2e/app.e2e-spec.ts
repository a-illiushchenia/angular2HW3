import { Angular2HW3Page } from './app.po';

describe('angular2-hw3 App', function() {
  let page: Angular2HW3Page;

  beforeEach(() => {
    page = new Angular2HW3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
