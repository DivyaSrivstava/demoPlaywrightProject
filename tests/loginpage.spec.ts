import{test,expect} from'../fixture/loginfixture.spec';
import * as data from '../test-data/logindata-test-data.json';


test.describe("Test Suit for Login Test: ",()=>{

    test("valid tescase for Login when username & password are valid test_01",async({page,loginpage})=>{
        // const login = new LoginPage(page);
        await loginpage.gotoBrowser();
        await loginpage.login(data.valid.username,data.valid.password);
        await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
    
    });

    test(" invalid tescase for Login when username & password are invalid test_02 ",async({page,loginpage})=>{
        await loginpage.gotoBrowser();
        await loginpage.login(data.invalid.username,data.invalid.password);
        await expect(page.locator('//*[@id="login-form"]/div[1]')).toHaveText('Incorrect username/password.');
        await page.waitForTimeout(2000)
    });
    
    test("invalid tescase for Login when username is invalid and password is valid test_03 ",async({page,loginpage})=>{
        await loginpage.gotoBrowser();
        await loginpage.login(data.invalid.username,data.valid.password);
        await expect(page.locator('//*[@id="login-form"]/div[1]')).toHaveText('Incorrect username/password.');
        await page.waitForTimeout(2000)
    });
    
    test("invalid tescase for Login when username is valid & password is invalid  test_04",async({page,loginpage})=>{
        // const login = new LoginPage(page);
        await loginpage.gotoBrowser();
        await loginpage.login(data.valid.username,data.invalid.password);
        await expect(page.locator('//*[@id="login-form"]/div[1]')).toHaveText('Incorrect username/password.');
        await page.waitForTimeout(2000)
    });
    
    test("invalid tescase for Login when username is empty & password is empty  test_05",async({page,loginpage})=>{
        // const login = new LoginPage(page);
        await loginpage.gotoBrowser();
        await loginpage.login(data.empty.username,data.empty.password);
        await expect(page.locator('//*[@id="login-form"]/div[1]')).toHaveText('Empty username/password.');
        await page.waitForTimeout(2000)
    });

});



