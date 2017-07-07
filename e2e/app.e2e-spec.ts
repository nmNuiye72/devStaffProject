import { DevStaffProjectPage } from './app.po';

describe('dev-staff-project App', () => {
  let page: DevStaffProjectPage;

  beforeEach(() => {
    page = new DevStaffProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
