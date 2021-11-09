import { Given, When, Then } from '@wdio/cucumber-framework';
import {getRandomEmailAddress} from  '../helpers/utils';
import * as id from '../../pages/identifiers';
import {authPageChecks, validateAccountCreated} from '../../validations/validations';
import * as action from '../../actions/actions'
import config from '../../testconfigs/config.json'
import {cloneDeep} from 'lodash'

const conf = cloneDeep(config);

Given(/^I am on the landing page$/, async () => {
    await browser.url(conf.endpoints.appUrl);
});

When(/^I click on Sign in$/, async () => {
    await $(id.landingPage.signIn).click();
});

Then(/^I am on authentication page$/, async () => {
    await expect($(id.authPage.authHeader)).toBeExisting();
    await expect($(id.authPage.authHeader)).toHaveTextContaining(authPageChecks.headerMessage);
});

When(/^I enter my email to create an account$/, async () => {
    const emailCreate = await $(id.createAccountPage.emailCreate);
    let email = getRandomEmailAddress();
    await emailCreate.setValue(email);
    await $(id.createAccountPage.submitCreateButton).click();
});

Then(/^I am on personal info page$/, async () => {
    await expect($(id.personalInfoPage.personalInfo.personalInfoHeader)).toBeExisting();
    await expect($(id.personalInfoPage.personalInfo.personalInfoHeader)).toHaveTextContaining('YOUR PERSONAL INFORMATION');
});

When(/^I enter personal info on the personal info page and click on register$/, async (table) => {
    var data = table.raw();
    if (data[1][0]==='Mr')
        await $(id.personalInfoPage.personalInfo.titleMr).click();
    else if (data[1][0]==='Mrs')
        await $(id.personalInfoPage.personalInfo.titleMrs).click();
    await $(id.personalInfoPage.personalInfo.firstName).setValue(data[1][1]);
    await $(id.personalInfoPage.personalInfo.lastName).setValue(data[1][2]);
    await $(id.personalInfoPage.personalInfo.pwd).setValue(data[1][3]);
    await $(id.personalInfoPage.personalInfo.dobDay).selectByIndex(data[1][4]);
    await $(id.personalInfoPage.personalInfo.dobMonth).selectByIndex(data[1][5]);
    await $(id.personalInfoPage.personalInfo.dobYear).selectByAttribute('value', data[1][6]);
    await $(id.personalInfoPage.addressInfo.company).setValue(data[1][7]);
    await $(id.personalInfoPage.addressInfo.addressLine1).setValue(data[1][8]);
    await $(id.personalInfoPage.addressInfo.addressLine2).setValue(data[1][9]);
    await $(id.personalInfoPage.addressInfo.city).setValue(data[1][10]);
    await $(id.personalInfoPage.addressInfo.state).selectByVisibleText(data[1][11])
    await $(id.personalInfoPage.addressInfo.zipCode).setValue(data[1][12]);
    await $(id.personalInfoPage.addressInfo.country).selectByVisibleText(data[1][13]);
    await $(id.personalInfoPage.addressInfo.mobile).setValue(data[1][14]);
    await $(id.personalInfoPage.addressInfo.aliasAddress).setValue(data[1][15]);
    await $(id.personalInfoPage.addressInfo.registerButton).click();
    
});

When(/^I signin with following username and password$/, async (table) => {
    var data = table.raw();
    await $(id.authPage.eMail).setValue(data[1][0]);
    await $(id.authPage.password).setValue(data[1][1]);
    await $(id.authPage.signInButton).click();
});

Then(/^the correct first name and surname is displayed$/, async () => {
    const accountName = 'Test Test';
    await expect($(id.myAccountPage.accountName)).toHaveTextContaining(accountName);
});

When(/^I click on signout button$/, async () => {
    await $(id.myAccountPage.signOutButton).click();
});

When(/^I select the (.+) product and add it in cart and navigate to payments screen$/, async (prodName) => {
    try {
        await action.addAndValidateProdToCart(prodName);
    } catch (error) {
        console.log(`Product Add failed:${error}`);
    }
    await $(id.productPage.cartConfirmation.proceedCheckoutButton).click();
    await $(id.productPage.cartNavigation.checkOutSummary).click();
    await $(id.productPage.cartNavigation.checkOutAddressShipping).click();
    await $(id.productPage.cartNavigation.checkoutTerms).click();
    await $(id.productPage.cartNavigation.checkOutAddressShipping).click();
});

Then(/^I validate the details on payment screen$/, async () => {
    
    await expect($(id.productPage.paymentScreen.description)).toHaveTextContaining('Blouse');
    await expect($(id.productPage.paymentScreen.unitPrice)).toHaveTextContaining('27');
    await expect($(id.productPage.paymentScreen.quantity)).toHaveTextContaining('1');
    await expect($(id.productPage.paymentScreen.total)).toHaveTextContaining('27');
    
});







