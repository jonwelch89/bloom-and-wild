Feature: User can navigate to product information of their choice

  Scenario: User can find products for birthdays
  	Given I am on the bloom and wild homepage
    When I click on Occasions
    Then I select Birthday
    Then I should be taken to the Birthday flowers listings
    When I click on More Info
    Then the product information is displayed 

Scenario: User can change product they send to a recipient
  	Given I am on the bloom and wild homepage
    When I click on Occasions
    And I click SEND on my chosen product
    Then I am taken to the product order form
    When I click to change the product I want
    Then the product order form is no longer displayed

   