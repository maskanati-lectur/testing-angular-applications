import { AppPage } from './app.po';

describe('counter in main page (end to end)', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should set Counter label based on number of clicks on increment button', () => {
    page.navigateTo();

    page.clickOnIncrementButton(2);

    const itemCount = page.getCounrLabel();
    expect(itemCount).toBe('2');
  })
});


