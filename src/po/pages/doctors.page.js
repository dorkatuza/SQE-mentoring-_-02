import { ListHeaderComponent } from '../../po/components/doctors/list-header.component.js';
import { AddDoctorComponent } from '../components/doctors/add-doctor-dialog.component.js';
import { SpecialistCardComponent } from '../components/doctors/specialist-card.component.js';
import { BasePage } from './base.page.js';

export class DoctorsPage extends BasePage {
    constructor() {
        super(`/showcase/angular/appointmentplanner/#/doctors`)
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }

    specialistCard(id) {
        return new SpecialistCardComponent(id);
    }
}