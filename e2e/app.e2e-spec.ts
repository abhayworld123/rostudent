import { RostudentPage } from './app.po';

describe('rostudent App', () => {
  let page: RostudentPage;

  beforeEach(() => {
    page = new RostudentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
