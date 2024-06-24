import { DashboardPage } from '../../po/pages/dashboard.page.js';
import { DoctorsPage } from '../../po/pages/doctors.page.js';

//pageFactory

export function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage()
    }
    return items[name.toLowerCase()];
}