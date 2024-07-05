import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs');

export class Nutritionals extends BasePage {
    nHome: By = By.xpath('//h4[text()="Nutritionals"]'); 
    nButton: By = By.xpath('(//a[text()=" Nutritionals "])'); 
    eBtn: By = By.xpath('(//a[text()=" Essentials "])');
    oBtn: By = By.xpath('(//a[text()=" Optimizers "])'); 
    mNRBtn: By = By.xpath('(//a[text()=" Mood & Relaxation "])'); 
    dDBtn: By = By.xpath('(//a[text()=" Digestion/Detox "])'); 
    mNCBtn: By = By.xpath('(//a[text()=" Mother/Child "])'); 

    constructor(){
        super({url:'https://www.usana.com/ux/cart/en-US/landing?shopperSource=PHX-newDotCom'}); 
    }
}