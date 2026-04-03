export default class BaseUtils {

    constructor(page) {
        this.page = page;
    }

    async fill(locator, value) {
        await this.page.locator(locator).fill(value);
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

}




// module.exports = { BaseUtils };