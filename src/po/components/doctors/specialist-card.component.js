import { BaseComponent } from "./../common/base.component.js";

export class SpecialistCardComponent extends BaseComponent{

    constructor(id) {
        super(`#Specialist_${id}`)
    }

    get name() {
        return this.rootEl.$('.name');
    }

    get education() {
        return this.rootEl.$('.education');
    }
}