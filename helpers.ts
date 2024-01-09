import { By, until, WebDriver, WebElement } from 'selenium-webdriver';
import { Config } from './config';

export async function querySelector(
  selector: string,
  driver: WebDriver,
  waitUntilTime = Config.timeoutWaitForElement
): Promise<WebElement> {
  const el = await driver.wait(until.elementLocated(By.css(selector)), waitUntilTime);

  return driver.wait(until.elementIsVisible(el), waitUntilTime);
}