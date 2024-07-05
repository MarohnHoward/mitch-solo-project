import { Nutritionals } from "./nutritionalsPage";
const page = new Nutritionals(); 

test('nutritionals categories',async () => {
    await page.navigate(); 
    await page.driver.manage().window().maximize(); 
    await page.click(page.nHome); 
    await page.driver.sleep(2000); 
    await page.click(page.eBtn); 
    await page.click(page.oBtn); 
    await page.click(page.mNRBtn); 
    await page.click(page.dDBtn); 
    await page.click(page.mNCBtn); 
    await page.click(page.nButton); 
    await page.driver.quit(); 
})