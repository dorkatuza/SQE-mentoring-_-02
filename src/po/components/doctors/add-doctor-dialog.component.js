import { BaseComponent } from "./../common/base.component.js";

export class AddDoctorComponent extends BaseComponent{

    constructor() {
        super('.new-doctor-dialog');
    }

    get saveBtn() {
        return this.rootEl.$("//button[text()='Save']")
    }

    get closeBtn() {
        return this.rootEl.$(".new-doctor-dialog .e-dlg-closeicon-btn")
    }

    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]',
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}