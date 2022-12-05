const { Given, When, Then } = require('@wdio/cucumber-framework');

const BookingPage = require('./../pages/booking.page');

const bookingPage = new BookingPage();


Given(/^I am on the Premier Inn home screen$/, async () => {
    await bookingPage.shouldSeeHomeScreen()
});

When(/^I select account tab$/, async () => {
    await bookingPage.selectAccountTab()
});

When(/^I select account login button$/, async () => {
    await bookingPage.selectAccountLoginButton()
});

When(/^I enter (.*) in email address field$/, async (email) => {
    await bookingPage.enterEmail(email)
});

When(/^I enter (.*) in password field$/, async (password) => {
    await bookingPage.enterPassword(password)
});

When(/^I select login button$/, async () => {
    await bookingPage.selectLoginButton()
});

When(/^I select search tab$/, async () => {
    await bookingPage.selectSearchTab()
});

When(/^I select where to location$/, async () => {
    await bookingPage.selectWhereToLocation()
});

When(/^I enter (.*) postcode in search field$/, async (postcode) => {
    await bookingPage.enterPostcode(postcode)
});

When(/^I select the location$/, async () => {
    await bookingPage.selectLocation()
});

Then(/^I should be on the log in screen$/, async () => {
    await bookingPage.shouldSeeLoginScreen()
});

Then(/^I should be on the my account screen$/, async () => {
    await bookingPage.shouldSeeMyAccountScreen()
});

Then(/^I should be on the home screen$/, async () => {
    await bookingPage.shouldSeeHomeScreen()
});

Then(/^I should be on the location selection screen$/, async () => {
    await bookingPage.shouldSeeHomeScreen()
});

When(/^I select search button$/, async () => {
    await bookingPage.selectSearchButton()
});

When(/^I choose hotel from the search result$/, async () => {
    await bookingPage.selectHotel()
});

Then(/^I should see add extras screen$/, async () => {
    await bookingPage.shouldSeeExtrasScreen()
});

When(/^I select flex book button$/, async () => {
    await bookingPage.selectFlexBookButton()
});

When(/^I select continental breakfast option$/, async () => {
    await bookingPage.selectContinentalBreakfast()
});

When(/^I select continue button$/, async () => {
    await bookingPage.selectContinueButton()
});

Then(/^I should see your details screen$/, async () => {
    await bookingPage.shouldSeeYourDetailsScreen()
});

When(/^I scroll up your detail screen$/, async () => {
    await bookingPage.swipeUpYourDetailsScreen()
});

Then(/^I should see continue to payment button$/, async () => {
    await bookingPage.shouldSeeContinueToPaymentButton()
});

When(/^I select continue to payment button$/, async () => {
    await bookingPage.selectContinueToPaymentButton()
});

Then(/^I should be on review and book screen$/, async () => {
    await bookingPage.shouldSeeReviewScreen()
});

When(/^I select new credit or debit card payment type$/, async () => {
    await bookingPage.selectCreditDebitPayment()
});

Then(/^I should see enter card details button$/, async () => {
    await bookingPage.shouldSeeEnterCardDetails()
});

When(/^I select enter card details button$/, async () => {
    await bookingPage.selectEnterCardDetails()
});

When(/^I scroll up the review and book screen$/, async () => {
    await bookingPage.swipeUpReviewScreen()
});

Then(/^I should be on payment details screen$/, async () => {
    await bookingPage.shouldSeePaymentDetailsScreen()
});

