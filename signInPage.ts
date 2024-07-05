import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs');

export class USANA extends BasePage {
    //Login: By = By.xpath('//a[text="Login"]');
    languageOk: By = By.xpath('//button[@class="btn btn-primary"]');
    Items: By = By.xpath('(//h1[@class="heading"])');
    userName: By = By.id('username');
    password: By = By.id('password');
    loginHome: By = By.xpath('(//*[text()="Login"])[2]');
    loginUser: By = By.xpath('//button[@class="universal-button size-medium type-primary"]'); 
    shop: By = By.id('dropdownMenu0');
    
   
       constructor() {
        super({url:"https://www.usana.com/ux/dotcom/enu-US/home"});
    }
    
};