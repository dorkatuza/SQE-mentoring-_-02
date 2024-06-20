import { expect, browser, $ } from '@wdio/globals'
import { describe, it } from 'mocha';

describe('Error message on doctors page', () => {

    it("should validate the error message, when add new doctor, without e-mail", async () => {
        await browser.url(`https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard`)
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
        await $("//button[text()='Cancel']").click();
    });
})