const ActionHelper = require('./../helpers/actionHelpers');
const Gesture = require('./../helpers/gesture');
require('chai').should();

class BookingPage {

    getBookingScreen() {
        return require(`./../screens/booking.screen`);
    }

    async shouldSeeHomeScreen () {
        (await ActionHelper.isVisible(this.getBookingScreen().whereToLocation)).should.equal(true);
    }

    async selectAccountTab () {
        await ActionHelper.click(this.getBookingScreen().accountTab);
    }

    async selectAccountLoginButton () {
        await ActionHelper.click(this.getBookingScreen().accountLoginButton);
    }

    async shouldSeeLoginScreen () {
        (await ActionHelper.isVisible(this.getBookingScreen().loginScreen)).should.equal(true);
    }

    async enterEmail(emailAddress) {
        await ActionHelper.sendText(this.getBookingScreen().emailTextField, emailAddress);
    }

    async enterPassword(loginPassword) {
        await ActionHelper.sendText(this.getBookingScreen().passwordTextField, loginPassword);
    }

    async selectLoginButton() {
        await ActionHelper.click(this.getBookingScreen().loginButton);
    }

    async shouldSeeMyAccountScreen () {
        await ActionHelper.waitForElement(this.getBookingScreen().myAccountScreen, 4);
        (await ActionHelper.isVisible(this.getBookingScreen().myAccountScreen)).should.equal(true);
    }

    async selectSearchTab () {
        await ActionHelper.click(this.getBookingScreen().searchTab);
    }

    async selectWhereToLocation () {
        await ActionHelper.click(this.getBookingScreen().whereToLocation);
    }

    async enterPostcode(postcode) {
        await ActionHelper.waitForElement(this.getBookingScreen().searchTextField, 2);
        await ActionHelper.sendText(this.getBookingScreen().searchTextField, postcode);
    }

    async selectLocation () {
        await ActionHelper.waitForElement(this.getBookingScreen().searchTextField, 4);
        await ActionHelper.click(this.getBookingScreen().location);
    }

    async selectSearchButton () {
        await ActionHelper.waitForElement(this.getBookingScreen().searchButton, 2);
        await ActionHelper.click(this.getBookingScreen().searchButton);

    }

    async selectHotel () {
        await ActionHelper.waitForElement(this.getBookingScreen().hotel, 3);
        await ActionHelper.click(this.getBookingScreen().hotel);

    }

    async selectFlexBookButton () {
        await ActionHelper.click(this.getBookingScreen().flexBookButton);

    }

    async shouldSeeExtrasScreen () {
        (await ActionHelper.isVisible(this.getBookingScreen().extrasScreen)).should.equal(true);
    }

    async selectContinentalBreakfast () {
        await ActionHelper.click(this.getBookingScreen().continentalBreakfast);

    }

    async selectContinueButton () {
        await ActionHelper.click(this.getBookingScreen().continueButton);

    }

    async shouldSeeYourDetailsScreen () {
        (await ActionHelper.isVisible(this.getBookingScreen().yourDetailsScreen)).should.equal(true);

    }

    async swipeUpYourDetailsScreen () {
        await Gesture.checkIfDisplayedWithSwipeUp(this.getBookingScreen().continueToPaymentButton,5 );

    }

    async swipeUpReviewScreen () {
        await Gesture.checkIfDisplayedWithSwipeUp(this.getBookingScreen().enterCardDetailsButton,5 );

    }

    async shouldSeeContinueToPaymentButton () {
        (await ActionHelper.isVisible(this.getBookingScreen().continueToPaymentButton)).should.equal(true);

    }

    async selectContinueToPaymentButton () {
        await ActionHelper.click(this.getBookingScreen().continueToPaymentButton);

    }

    async shouldSeeReviewScreen () {
        (await ActionHelper.isVisible(this.getBookingScreen().reviewScreen)).should.equal(true);

    }

    async selectCreditDebitPayment () {
        await ActionHelper.click(this.getBookingScreen().creditDebitPayment);

    }

    async shouldSeeEnterCardDetails () {
        (await ActionHelper.isVisible(this.getBookingScreen().enterCardDetailsButton)).should.equal(true);

    }

    async selectEnterCardDetails () {
        await ActionHelper.click(this.getBookingScreen().enterCardDetailsButton);

    }

    async shouldSeePaymentDetailsScreen () {
        (await ActionHelper.isVisible(this.getBookingScreen().paymentDetailsScreen)).should.equal(true);

    }

}

module.exports = BookingPage;
