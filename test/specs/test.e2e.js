import { expect, browser, $ } from '@wdio/globals'
import { describe, it } from 'mocha';

describe('E2E tests to appointment planner', () => {
    it("should open the site and validate the page title", async () => {
        await browser.url(`https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard`)
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("should validate the error message, add new doctor, without e-mail", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email12");
        await $("//button[text()='Cancel']").click();
    });

    /*it("should add a new doctor, basic", async () => {
        await $("div.doctors").waitForDisplayed();
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("Test Doctor");
        await $("#DoctorMobile").setValue(3630077012);
        await $("input[name='Email']").setValue("test@email.com");
        await $("input[name='Education']").setValue("MD");
        await $("//button[text()='Save']").click();

        const newDoctorCard = await $("#Specialist_8");
        newDoctorCard.isDisplayed();
        newDoctorCard.click();
        const newDoctorName = await $("div.name");
        newDoctorName.isDisplayed();
        expect(await newDoctorName.getText()).toEqual("Dr. Test Doctor");
    });

    it("should edit a doctor calendar, advanced", async () => {
        await $("div.dashboard").waitForDisplayed();
        await $("div.dashboard").click();
        await browser.execute(function() {
            const element = document.querySelector('a[href="#/doctor-details/5"]');
            if (element) {
              element.style.border = 'red solid 2px';
            }
          });
          await browser.pause(2000);
    });

    it("should display appointment details, waitUntil", async () => {
        await $("div.calendar").waitForDisplayed();
        await $("div.calendar").click();
        await $("div[data-id='Appointment_1019']").click();

        await browser.waitUntil(
            async () => await $(".quick-info-title").getText() === "Appointment Details",
            { timeout: 5000, interval: 600, timeoutMsg: "not loaded" }
            );
    });

    it("should select time slots in calendar, browser actions", async () => {
        const slot1 = await $("[data-date='1596376800000']");
        const slot2 = await $("[data-date='1596382200000']");
        const SHIFT = "\uE008";
        await slot1.click();
        await browser.performActions([
            {
                type: "key",
                id: "keyboard",
                actions: [
                    {
                        type: "keyDown",
                        value: SHIFT,
                    },
                ],
            },
        ]);
        await slot2.click();
        await browser.pause(500);
        await browser.performActions([
            {
                type: "key",
                id: "keyboard",
                actions: [
                    {
                        type: "keyDown",
                        value: SHIFT,
                    },
                ],
            },
        ]);
        await browser.releaseActions();

        await browser.pause(2000);
    });*/
})