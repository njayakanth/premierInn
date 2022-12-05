class BookingScreen{
    constructor(){
        this.accountTab =
            '//android.widget.FrameLayout[@resource-id="com.whitbread.premierinn:id/bottom_navigation_account"]';
        this.searchTab =
            '//android.widget.FrameLayout[@resource-id="com.whitbread.premierinn:id/bottom_navigation_search"]';
        this.accountLoginButton =
            '//android.widget.RelativeLayout[@resource-id="com.whitbread.premierinn:id/cab_my_account_log_in"]';
        this.emailTextField =
            '//android.widget.EditText[@resource-id="com.whitbread.premierinn:id/account_login_email_input"]';
        this.loginScreen =
            '//android.widget.LinearLayout[@resource-id="com.whitbread.premierinn:id/account_login_root_container"]'
        this.passwordTextField =
            '//android.widget.EditText[@resource-id="com.whitbread.premierinn:id/account_login_password_input"]';
        this.loginButton =
            '//android.widget.RelativeLayout[@resource-id="com.whitbread.premierinn:id/account_login_login_button"]';
        this.myAccountScreen =
            '//android.widget.TextView[@text="My account"]';
        this.whereToLocation =
            '//android.widget.LinearLayout[@resource-id="com.whitbread.premierinn:id/item_landing_where_to_location"]';
        this.searchTextField =
            '//android.widget.EditText[@resource-id="com.whitbread.premierinn:id/et_layout_search"]';
        this.searchButton =
            '//android.widget.ImageButton[@resource-id="com.whitbread.premierinn:id/landing_search_button"]';
        this.location =
            '//android.widget.TextView[@resource-id="com.whitbread.premierinn:id/place_name"]';
        this.hotel =
            '//android.widget.TextView[@resource-id="com.whitbread.premierinn:id/search_result_hotel_name"]';
        this.flexBookButton =
            '//android.widget.TextView[@text="Flex"]/following-sibling::android.widget.RelativeLayout[@resource-id="com.whitbread.premierinn:id/cal_saver_button"]';
        this.extrasScreen =
            '//android.widget.TextView[@text="Add extras"]';
        this.continentalBreakfast =
            '//android.widget.TextView[@text="Continental breakfast"]/../following-sibling::android.widget.RadioButton[@resource-id="com.whitbread.premierinn:id/rb_breakfast_radio_button"]';
        this.continueButton =
            '//android.widget.RelativeLayout[@resource-id="com.whitbread.premierinn:id/cab_summary_continue_to_login"]';
        this.yourDetailsScreen =
            '//android.widget.TextView[@text="Your details"]';
        this.continueToPaymentButton =
            '//android.widget.RelativeLayout[@resource-id="com.whitbread.premierinn:id/cta_guest_details_continue"]';
        this.reviewScreen =
            '//android.widget.TextView[@text="Review and book"]';
        this.creditDebitPayment =
            '//android.widget.TextView[@resource-id="com.whitbread.premierinn:id/new_card_Lbl"]/../../following-sibling::android.widget.RadioButton[@resource-id="com.whitbread.premierinn:id/paymentTypeRadioButton"]';
        this.enterCardDetailsButton =
            '//android.widget.RelativeLayout[@resource-id="com.whitbread.premierinn:id/review_booking_confirm_button"]';
        this.paymentDetailsScreen =
            '//android.widget.TextView[@text="Payment details"]';

    }
}

module.exports = new BookingScreen();