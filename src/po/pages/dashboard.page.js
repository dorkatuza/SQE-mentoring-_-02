import { SideMenuComponent } from '../../po/components/common/sidemenu.component.js';
import { BasePage } from './base.page.js';

export class DashboardPage extends BasePage{

    constructor() {
        super(`/showcase/angular/appointmentplanner/#/dashboard`);
        this.sideMenu = new SideMenuComponent();
    }
}