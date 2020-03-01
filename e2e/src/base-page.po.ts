import { browser, by, element } from 'protractor';

export abstract class BasePage {
    abstract getRelativeUrl() : string;

    navigateTo() {
        return browser.get(this.getRelativeUrl());
    }
}