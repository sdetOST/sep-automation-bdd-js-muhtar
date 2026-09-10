import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When('user selects {string} payment plan', async function (paymentPlan) {
    await paymentPlanPage.selectPaymentPlan(paymentPlan);
});

Then('{string} payment plan option should be highlighted', async function (paymentPlan) {
    await paymentPlanPage.verifyPaymentPlanHighlighted(paymentPlan);
});

Then('{string} payment plan option should not be highlighted', async function (paymentPlan) {
    await paymentPlanPage.verifyPaymentPlanNotHighlighted(paymentPlan);
});