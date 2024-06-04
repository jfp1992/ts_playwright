import {Page} from "@playwright/test";
import {Locator} from "playwright";

export class GlobalBase {
    public page: Page;
    public labelLogo: Locator;

    constructor(page: Page) {
        this.page = page
        this.labelLogo = this.page.locator("div.app_logo")
    }
    async waitForLoadState(timeout: number = 120000){
        await this.page.waitForLoadState("networkidle")
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForLoadState("load")
    }
}