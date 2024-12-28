const helpers = require('../helpers/generateData.js')

const newEmail = helpers.generateEmail();

describe('Register User', () => {
    it('Check Homepage Elements', async() => {
        browser.url("https://www.automationexercise.com")
        browser.maximizeWindow()
        const homepageBanner = await $("//img[@alt='Website for automation practice']")
        await expect(homepageBanner).toBeDisplayed()

        await $("//a[normalize-space()='Signup / Login']").click()
        const newUserSignUpTitle = await $("//h2[normalize-space()='New User Signup!']")
        await expect(newUserSignUpTitle).toBeDisplayed()
        await expect(newUserSignUpTitle).toHaveTitle("New User Signup!")
    })

    it("Sign Up New User", async() => {
        await $("//input[@placeholder='Name']").setValue("AutomationTester")
        await $("//input[@data-qa='signup-email']").setValue(newEmail)
        await $("//button[normalize-space()='Signup']").click();
    })

    it("Enter Account Information", async() => {
        const enterAccountInfoTitle = await $("//b[normalize-space()='Enter Account Information']")
        await expect(enterAccountInfoTitle).toBeDisplayed()

        const maleRadioBtn = await $("#id_gender1")
        maleRadioBtn.click()
        maleRadioBtn.isSelected()

        await $("#name").setValue("AutomationTester")
        
        const emailField = await $("#email")
        await expect(emailField).toBeDisabled()
        await expect(emailField).toHaveValue(newEmail)

        await $("#password").setValue("123456")

        const daysCalendar = await $("#days")
        daysCalendar.selectByVisibleText("22")

        const monthCalendar = await $("#months")
        monthCalendar.selectByVisibleText("May")

        const yearCalendar = await $("#years")
        yearCalendar.selectByVisibleText("1995")

        const newsletterBox = await $("#newsletter")
        newsletterBox.click()
        newsletterBox.isSelected()

        const offerBox = await $("#optin")
        offerBox.click()
        offerBox.isDisplayed()
    })
})