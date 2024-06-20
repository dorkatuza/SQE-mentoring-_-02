import { expect, browser, $ } from '@wdio/globals';
import { describe, it } from 'mocha';
import { DashboardPage } from '../../po/pages/dashboard.page.js';
import { DoctorsPage } from '../../po/pages/doctors.page.js';
 
const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
    beforeEach( async () => {
        await dashboardPage.open();
    })

    it("should check the page title", async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it("should open modal window for adding a new doctor", async () => {
        await dashboardPage.sideMenu.item("doctors").click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
    });

    it("should add a new doctor", async () => {
        await dashboardPage.sideMenu.item("doctors").click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();

        await $("[name='Name']").setValue("John Doe");
        await $("#DoctorMobile").setValue("12345612333");
        await $("[name='Email']").setValue("test@test.com");
        await $("[name='Education']").setValue("Basic");
        await $("[name='Designation']").setValue("Test");

        await $("//button[text()='Save']").click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();

        await expect($("#Specialist_8").$(".name")).toHaveText("Dr. John Doe");
        await expect($("#Specialist_8").$(".education")).toHaveText("Basic", {ignoreCase: true});
    });

    it("should close a modal window for adding a new doctor", async () => {
        await dashboardPage.sideMenu.item("doctors").click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        await $(".new-doctor-dialog .e-dlg-closeicon-btn").click();
        await expect($(".new-doctor-dialog")).not.toBeDisplayed();
    });
})