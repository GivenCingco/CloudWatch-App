import { test, expect } from "@playwright/test";

test.describe("Form Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/form");
  });

  test("should use Manrope font", async ({ page }) => {
    const fontFamily = await page.evaluate(() => {
      const element = document.querySelector('[data-testId="form-heading"]'); // Targeting the h1 with data-testId
      return element ? window.getComputedStyle(element).fontFamily : null;
    });
    console.log("Font Family:", fontFamily);
    // Check if "Manrope" is in the font family
    expect(fontFamily).toContain("Manrope");
  });
});
clearImmediate