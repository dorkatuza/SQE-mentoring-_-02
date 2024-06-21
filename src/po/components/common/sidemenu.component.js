import { BaseComponent } from "./../common/base.component.js";

export class SideMenuComponent extends BaseComponent {

    constructor() {
        super('#plannerSiderBar');
    }

    get name() {
        return this.rootEl.$(".name");
    }

    item(param) {
        const selectors = {
            dashboard: '[routerLink="/dashboard"]',
            schedule: '[routerLink="/calendar"]',
            doctors: '[routerLink="/doctors"]'
        };
        return $(`#plannerSiderBar ${selectors[param.toLowerCase()]}`);
    }
}