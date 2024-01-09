import { Builder, WebDriver } from 'selenium-webdriver';
import { querySelector } from './helpers';
import { Config } from './config';

const rootURL = 'https://www.mozilla.org/en-US/';

describe('Tests',  () => {
    let driver: WebDriver;

    beforeEach(async () => {
        jest.setTimeout(Config.timeout);
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(rootURL);
    });

    afterEach(async () => driver.quit());

    it('should click on navbar button to display a drawer', async () => {
        const anchor = await querySelector("#homepage-get-firefox", driver);
        const actual = await anchor.getText();
        const expected = 'Get Firefox';
        expect(actual).toEqual(expected);
    });
});