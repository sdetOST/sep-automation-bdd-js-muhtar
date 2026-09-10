import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When('user enters {string} as the CVC number', async function (string) {
    await reviewPaymentPage.enterCVC(string);
});

When('user enters invalid CVC numbers from {string}', async function (fileName) {
    await reviewPaymentPage.enterInvalidCvcNumbersFromFile(fileName);
});

Then('user should see the CVC error message {string}', async function (string) {
    await expect(reviewPaymentPage.cardCVCErrorMessage).toHaveText(string);
});