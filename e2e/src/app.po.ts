import { browser, by, element } from 'protractor';
import { BasePage } from './base-page.po';

export class AppPage extends BasePage {
  getRelativeUrl(): string {
    return "/";
  }

  clickOnIncrementButton(count: number) { 
    for (let i = 0; i < count; i++) {
      element(by.css('.button-up')).click();
    }
  }

  getCounrLabel()  {
    return element(by.css('.count-label')).getText() as Promise<string>;
  }
}
