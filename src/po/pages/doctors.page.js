import { ListHeaderComponent } from '../../po/components/doctors/list-header.component.js';
import { AddDoctorComponent } from '../components/doctors/add-doctor-dialog.component.js';

export class DoctorsPage {
    constructor() {
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }

    async open(){
        await browser.url(`https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors`);
    }
}