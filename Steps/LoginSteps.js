import  LoginPageObjects  from "../PageObjects/LoginPageObjects";

import  BaseUtils  from "../Utilities/BaseUtils";

export default class LoginSteps {

    constructor(page) {
        this.page = page;
        this.bu = new BaseUtils(this.page);
       
    }

    async SuccessLogin(username,password) {
        // await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
         
        console.log("Login started");
        // await this.page.locator(LoginPageObjects.username, "asdfgh1212jk@gmail.com");
        // await this.page.locator(LoginPageObjects.password, "Test@123");
        // await this.page.click(LoginPageObjects.loginbtn);

        // await this.page.locator(this.lpo.signOut).waitFor({ state: "visible" });
        
        await this.bu.fill(LoginPageObjects.username, username);//asdfgh1212jk@gmail.com
        await this.bu.fill(LoginPageObjects.password, password);//Test@123
        await this.bu.click(LoginPageObjects.loginbtn);

        // await this.page.locator(this.lpo.signOut).waitFor({ state: "visible" });
    }

    async logintestbypass() {

        await this.page.goto("/client/#/dashboard/dash");
        // await expthis.page.locator

        // await this.page.pause(); 

          await this.page.locator(LoginPageObjects.signOut).waitFor({ state: "visible" });
    }

}

// module.exports = { LoginSteps };