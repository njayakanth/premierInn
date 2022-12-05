Feature: Hotel Booking

  Scenario: Verify logged in user is able book an hotel in Premier Inn app

    Given I am on the Premier Inn home screen
    When I select account tab
    And I select account login button
    Then I should be on the log in screen
    When I enter tappsemail@gmail.com in email address field
    And I enter Password01 in password field
    And I select login button
    Then I should be on the my account screen
    When I select search tab
    Then I should be on the home screen
    When I select where to location
    And I enter IG26DE postcode in search field
    And I select the location
    Then I should be on the home screen
    When I select search button
    And I choose hotel from the search result
    And I select flex book button
    Then I should see add extras screen
    When I select continental breakfast option
    And I select continue button
    Then I should see your details screen
    When I scroll up your detail screen
    Then I should see continue to payment button
    When I select continue to payment button
    Then I should be on review and book screen
    When I select new credit or debit card payment type
    And I scroll up the review and book screen
    Then I should see enter card details button
    When I select enter card details button
    Then I should be on payment details screen

