import { QuickLink } from "./quickLinksPage";
const quick = new QuickLink(); 

test('quick links work',async () => {
    await quick.navigate(); 
    await quick.driver.manage().window().maximize(); 
    await quick.click(quick.languageOk); 
    await quick.click(quick.cookies); 
    await quick.scroll(quick.csl); 
    await quick.quickClick(); 
    await quick.driver.quit(); 
}); 