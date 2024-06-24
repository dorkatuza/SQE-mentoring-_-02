import { browser } from '@wdio/globals';
import { HeaderComponent } from './../components/common/header.component.js';
import { SideMenuComponent } from './../components/common/sidemenu.component.js';

export class BasePage {
    
    constructor(url) {
        this.url = url;
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }

    open() {
        return browser.url(this.url);
    }
}