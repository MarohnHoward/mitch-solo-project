import {By} from 'selenium-webdriver'; 
import { BasePage } from './basePage';

export class QuickLink extends BasePage {
    languageOk: By = By.xpath('//button[@class="btn btn-primary"]');
    cookies: By = By.id('onetrust-accept-btn-handler'); 
    drW: By = By.xpath('//a[text()=" Dr. Wentz "]'); 
    ats: By = By.xpath('//a[text()=" Ask the Scientists "]'); 
    ufl: By = By.xpath('//a[text()=" USANA Foundation "]'); 
    ual: By = By.xpath('//a[text()=" USANA Athletes "]'); 
    tub: By = By.xpath('//a[text()=" The USANA Blog "]'); 
    uil: By = By.xpath('//a[text()=" USANA Income "]'); 
    csl: By = By.xpath('//a[text()=" Clinical Studies "]'); 
    sml: By = By.xpath('//a[text()=" Site Map "]'); 
    acp: By = By.xpath('//a[text()=" Affiliate Commission Plan "]'); 

    constructor(){
        super({url:'https://www.usana.com/ux/dotcom/enu-US/home'}); 
    }; 

    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(2000); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }
    async scroll(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform();
    };
    async quickClick() {
        await this.click(this.drW); 
        await this.tabs(); 
        await this.click(this.ats); 
        await this.tabs(); 
        //await this.click(this.ufl); 
        //await this.tabs()
        await this.click(this.ual); 
        await this.tabs()
        await this.click(this.tub); 
        await this.tabs()
        await this.click(this.uil); 
        await this.tabs()
        await this.click(this.csl); 
        await this.tabs()
        //await this.click(this.sml); 
        //await this.tabs()
        await this.scroll(this.acp)
        await this.click(this.acp); 
        await this.driver.navigate().back()
    }
}