import { BaseComponent } from "./../common/base.component.js";

export class HeaderComponent extends BaseComponent {

    constructor() {
        super(".palnner-header");
    }

    get logoutBtn() {
        return this.rootEl.$(".logout-icon-container");
    }
}