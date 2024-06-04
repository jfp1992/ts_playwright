import {Locator, Page} from 'playwright';
import {GlobalBase} from "./base/GlobalBase";

export class Login extends GlobalBase{
    private wrapperLoginForm: Locator;
    public fieldUsername: Locator;
    public fieldPassword: Locator;
    public labelError: Locator;
    public buttonLogin: Locator;

    constructor(page: Page) {
        super(page);
        this.wrapperLoginForm = this.page.locator("div.login_wrapper-inner")
        this.fieldUsername = this.wrapperLoginForm.locator("input").nth(0)
        this.fieldPassword = this.wrapperLoginForm.locator("input").nth(1)
        this.labelError = this.wrapperLoginForm.locator("div.error")
        this.buttonLogin = this.wrapperLoginForm.locator("input").nth(2)
    }

    async _setUsername(username: string) {
        await this.fieldUsername.fill(username);
    }

    async _setPassword(password: string) {
        await this.fieldPassword.fill(password);
    }

    async _submit() {
        await this.buttonLogin.click();
    }

    async login(username: string, password: string) {
        await this._setUsername(username);
        await this._setPassword(password);
        await this._submit();
    }
}