import { BasePage } from "./BasePage.js";
import { expect } from "@playwright/test";

export class PaymentPlanPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.chooseAPaymentPlanText = page.locator(
      "//*[text()='Choose a payment plan']"
    );

    this.upfrontPaymentOption = page.locator(
      "//span[@class='payment-type'][contains(text(),'Upfront')]"
    );

    this.upfrontPaymentAmount = page.locator("//span[@class='discount-price']");

    this.payOnceTextUpFront = page.locator(
      "//span[@class='discount-price']/span"
    );

    this.upfrontPaymentFrame = page.locator(
      "(//mat-expansion-panel-header[@role='button'])[1]"
    );

    this.upfrontAccordionPanel = page.locator(
      "(//mat-accordion//mat-expansion-panel)[1]"
    );

    this.greenBadgeUpfrontDiscount = page.locator(
      "//span[@class='chip-content']"
    );

    this.greenBadgeElectricBoltUpfrontDiscount = page.locator(
      "//span[@class='chip-content']/span[@class='material-symbols-outlined light-icon']"
    );

    this.greenBadgeTextUpfrontDiscount = page.locator(
      "//span[@class='chip-content']"
    );

    this.couponAvailableBadgeUpfrontDiscount = page.locator(
      "//mat-chip[contains(@class, 'coupon-badge')]"
    );

    this.couponBoxCloseBtnX = page.locator(
      '//*[@id="cdk-accordion-child-0"]/div/div/div[3]/mat-form-field/div[1]/div[2]/div[2]/button/span[3]'
    );

    this.basePriceTextUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Base price')]"
    );

    this.basePriceAmountUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Base price')]/following-sibling::span"
    );

    this.upfrontDiscountTextUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Upfront')]"
    );

    this.upfrontDiscountAmountUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Upfront')]/following-sibling::span"
    );

    this.iHaveAPromoCodeButtonUnderUpfront = page.locator(
      "//button[contains(text(), 'I have a promo code')]"
    );

    this.subtotalTextUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/div/span[contains(text(), 'Subtotal')]"
    );

    this.subtotalAmountUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/div/span[contains(text(), 'Subtotal')]/following-sibling::span"
    );

    this.excludingFeesTextUnderUpfront = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/i[contains(text(), 'excluding fees')]"
    );

    this.installmentsPaymentOption = page.locator(
      "//span[@class='payment-type'][contains(text(),'Installments')]"
    );

    this.installmentsPaymentFrame = page.locator(
      "(//mat-expansion-panel-header[@role='button'])[2]"
    );

    this.installmentsAccordionPanel = page.locator(
      "(//mat-accordion//mat-expansion-panel)[2]"
    );

    this.installmentsPaymentAmount = page.locator(
      "//span[@class='discount-price ng-star-inserted']"
    );

    this.perMonthTextInstallments = page.locator(
      "//span[@class='discount-price ng-star-inserted']/span"
    );

    this.couponAvailableBadgeInstallments = page.locator(
      "(//mat-chip[contains(@class, 'coupon-badge')])[2]"
    );

    this.basePriceTextUnderInstallments = page.locator(
      "//div[@class='content-panel-item coupon-section ng-star-inserted']/div/span[contains(text(), 'Base price')]"
    );

    this.basePriceAmountUnderInstallments = page.locator(
      "//div[@class='content-panel-item coupon-section ng-star-inserted']/div/span[contains(text(), 'Base price')]/following-sibling::span"
    );

    this.installmentsTextUnderInstallments = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installments')]"
    );

    this.installmentsNumberUnderInstallments = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installments')]/following-sibling::span"
    );

    this.pricePerInstallmentsTextUnderInstallments = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Price per installment')]"
    );

    this.pricePerInstallmentsAmountUnderInstallments = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Price per installment')]/following-sibling::span"
    );

    this.dueTodayTextUnderInstallments = page.locator(
      "//span[@class='sub-item-panel ng-star-inserted' and contains(text(), 'Due Today')]"
    );

    this.firstMonthPaymentTextUnderInstallments = page.locator(
      "//div[@class='fee-items-holder']/span[contains(text(), 'First month')]"
    );

    this.firstMonthPaymentAmountUnderInstallments = page.locator(
      "//div[@class='fee-items-holder']/span[contains(text(), 'First month')]/following-sibling::span"
    );

    this.excludingFeesTextUnderInstallments = page.locator(
      "(//div[@class='content-panel-item ng-star-inserted']/i[contains(text(), 'excluding fees')])[2]"
    );

    this.iHaveAPromoCodeButtonUnderInstallments = page.locator(
      "(//button[contains(text(), 'I have a promo code')])[2]"
    );

    this.inactiveNextButton = page.locator("//button[text()='Next']");

    this.activeNextButton = page.locator(
      "//button[@class = 'next-button' and text()='Next']"
    );

    this.backButton = page.locator("//span[@class='back-button']");

    this.footerText = page.locator(
      "(//p[@class = 'footer-text' and contains(text(), 'Need help?')])[2]"
    );

    this.paymentPlanBoxes = page.locator(
      "//mat-accordion[@class='mat-accordion']/div/mat-expansion-panel/mat-expansion-panel-header"
    );

    this.step1 = page.locator("//div[@class='step-circle'][contains(.,'1')]");

    this.step2 = page.locator("//div[@class='step-circle'][contains(.,'2')]");

    this.step3 = page.locator("//div[@class='step-circle'][contains(.,'3')]");

    this.UpfrontText = page.locator("//span[@class='payment-type']");


  }

  async selectPaymentPlan(paymentPlan) {
    paymentPlan = paymentPlan.toLowerCase();
    switch (true) {
      case paymentPlan.includes('upfront'):
        await this.upfrontPaymentOption.click();
        break;
      case paymentPlan.includes('installments'):
        await this.installmentsPaymentOption.click();
        break;
      default:
        throw new Error(`Invalid payment plan: ${paymentPlan}`);
    }
  }

  async clickNextButton() {
    await this.activeNextButton.click();
  }

  /**
   * Returns the header frame locator for the given payment plan.
   * @param {string} paymentPlan
   * @returns {import('@playwright/test').Locator}
   */
  getPaymentPlanFrame(paymentPlan) {
    paymentPlan = paymentPlan.toLowerCase();
    switch (true) {
      case paymentPlan.includes('upfront'):
        return this.upfrontPaymentFrame;
      case paymentPlan.includes('installments'):
        return this.installmentsPaymentFrame;
      default:
        throw new Error(`Invalid payment plan: ${paymentPlan}`);
    }
  }

  /**
   * Returns the accordion panel locator for the given payment plan.
   * @param {string} paymentPlan
   * @returns {import('@playwright/test').Locator}
   */
  getPaymentPlanAccordion(paymentPlan) {
    paymentPlan = paymentPlan.toLowerCase();
    switch (true) {
      case paymentPlan.includes('upfront'):
        return this.upfrontAccordionPanel;
      case paymentPlan.includes('installments'):
        return this.installmentsAccordionPanel;
      default:
        throw new Error(`Invalid payment plan: ${paymentPlan}`);
    }
  }

  /**
   * Verifies that the specified payment plan accordion option is highlighted (selected).
   * @param {string} paymentPlan
   */
  async verifyPaymentPlanHighlighted(paymentPlan) {
    const frame = this.getPaymentPlanFrame(paymentPlan);
    await expect(frame).toBeVisible();
    await expect(frame).toHaveAttribute('aria-expanded', 'true');
    await expect(frame).toHaveClass(/mat-expanded/);
  }

  /**
   * Verifies that the specified payment plan accordion option is not highlighted (collapsed).
   * @param {string} paymentPlan
   */
  async verifyPaymentPlanNotHighlighted(paymentPlan) {
    const frame = this.getPaymentPlanFrame(paymentPlan);
    await expect(frame).toBeVisible();
    await expect(frame).toHaveAttribute('aria-expanded', 'false');
  }

}
