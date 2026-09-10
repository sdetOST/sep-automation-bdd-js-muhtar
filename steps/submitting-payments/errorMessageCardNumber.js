import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";



When('user enters {string} as the card number', async function (string) {
    await reviewPaymentPage.enterCardNumber(string);
});

When('user clicks the terms and contidions checkbox', async function () {
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});

When('user enters invalid card numbers from {string}', async function (fileName) {
    await reviewPaymentPage.enterInvalidCardNumbersFromFile(fileName);
});

Then('user should see the error message {string}', async function (string) {
    const errorAlert = reviewPaymentPage.paymentFrame.locator(
        "//p[contains(@class, 'p-FieldError') and @role='alert']"
    );
    await expect(errorAlert).toHaveText(string);
});