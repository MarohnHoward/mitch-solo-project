import { USANA } from "./signInPage";

const Usana = new USANA()

  test ('Sign In Test', async() => {
    await Usana.navigate();
    await Usana.driver.manage().window().maximize();
    await Usana.click(Usana.languageOk)
    await Usana.click(Usana.loginHome);
    await Usana.click(Usana.userName);
    await Usana.setInput(Usana.userName, "Yrcw2011");
    await Usana.click(Usana.password);
    await Usana.setInput(Usana.password, "Lead2024.")
    await Usana.click(Usana.loginUser);
    await Usana.driver.sleep(2000)
    await Usana.driver.quit() 
});

