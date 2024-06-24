import { expect, browser, $ } from '@wdio/globals';
import { describe, it } from 'mocha';
import { pages } from '../../po/pages/index.js';

describe('Doctors page', () => {
    beforeEach( async () => {
        await pages('dashboard').open();
    })

    it("should check the page title", async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it("should open modal window for adding a new doctor", async () => {
        await pages('dashboard').sideMenu.item("doctors").click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
    });

    it("should add a new doctor", async () => {
        await pages('dashboard').sideMenu.item("doctors").click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.input('phone').setValue("12345612333");
        await pages('doctors').addDoctorModal.input('email').setValue("test@test.com");
        await pages('doctors').addDoctorModal.input('education').setValue("Basic");
        await pages('doctors').addDoctorModal.input('designation').setValue("Test");

        await pages('doctors').addDoctorModal.saveBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

        await expect(pages('doctors').specialistCard(8).name).toHaveText("Dr. John Doe");
        await expect(pages('doctors').specialistCard(8).education).toHaveText("Basic", {ignoreCase: true});
    });

    it("should close a modal window for adding a new doctor", async () => {
        await pages('dashboard').sideMenu.item("doctors").click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
        await pages('doctors').addDoctorModal.closeBtn.click();
        await expect($(".new-doctor-dialog")).not.toBeDisplayed();
    });
})