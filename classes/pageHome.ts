import {Locator, Page} from 'playwright';
import {GlobalBase} from "./base/GlobalBase";

export class Home extends GlobalBase {
    public wrapperHeader: Locator;
    public buttonMenu: Locator;
    public buttonShoppingCart: Locator;

    private _wrapperProductContainer: Locator;
    private _wrapperProduct: Locator; // Assuming you have this property

    constructor(page: Page) {
        super(page);
        this.wrapperHeader = this.page.locator("div#header_container");
        this.buttonMenu = this.wrapperHeader.locator("div.bm-burger-button");
        this.buttonShoppingCart = this.wrapperHeader.locator("div#shopping_cart_container");

        this._wrapperProductContainer = this.page.locator("div.inventory_item")

    }

    get labelProductTitle(): Locator {
        return this.wrapperProduct.locator("div[data-test='inventory-item-name']");
    }

    get wrapperProduct(): Locator {
        return this._wrapperProduct;
    }

    set wrapperProduct(index: number) {
        this._wrapperProduct = this._wrapperProductContainer.nth(index);
    }
}
