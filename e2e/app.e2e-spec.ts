import { MdbootstrapPage } from './app.po';

describe('mdbootstrap App', function() {
  let page: MdbootstrapPage;

  beforeEach(() => {
    page = new MdbootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
