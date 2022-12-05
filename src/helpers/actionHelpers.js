
class ActionHelper {


    static async isVisible(locator) {
        return !!(await $(locator).isDisplayed());
    }

    static async click(locator) {
        await $(locator).click();
    }

    static async waitForElement(locator, waitTimeInSeconds) {
        await $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static async sendText(locator, inputText) {
        await $(locator).addValue(inputText);
    }
}

module.exports = ActionHelper;