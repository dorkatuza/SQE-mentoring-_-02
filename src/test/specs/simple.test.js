import { expect, browser, $ } from '@wdio/globals'
import { describe, it } from 'mocha';

describe('Doctors page', () => {
    beforeEach( async () => {
        await browser.url(`https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard`);
    })

    it("should check the page title", async () => {
        await $("div.doctors").click();
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it("should open modal window for adding a new doctor", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await expect($(".new-doctor-dialog")).toBeDisplayed();
    });

    it("should add a new doctor", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $(".new-doctor-dialog").waitForDisplayed();

        await $("[name='Name']").setValue("John Doe");
        await $("#DoctorMobile").setValue("12345612333");
        await $("[name='Email']").setValue("test@test.com");
        await $("[name='Education']").setValue("Basic");
        await $("[name='Designation']").setValue("Test");

        await $("//button[text()='Save']").click();
        await expect($(".new-doctor-dialog")).not.toBeDisplayed();

        await expect($("#Specialist_8").$(".name")).toHaveText("Dr. John Doe");
        await expect($("#Specialist_8").$(".education")).toHaveText("Basic", {ignoreCase: true});
    });

    it("should close a modal window for adding a new doctor", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $(".new-doctor-dialog").waitForDisplayed();
        await $(".new-doctor-dialog .e-dlg-closeicon-btn").click();
        await expect($(".new-doctor-dialog")).not.toBeDisplayed();
    });
})