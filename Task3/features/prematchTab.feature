Feature: Main page scenarios - check Prematch tab.

  @regression @prematchtab
  Scenario: As a user, I want to open homepage and switch to Prematch tab.
    Given I am on the Live page
    Then Event has been appeared
    And Betslip is not displayed
    When I switch to Prematch tab
    Then Prematch tab active has been appeared
    And Event has been appeared

  @regression @prematchtab
  Scenario: As a user, I want to add prematch selection to Betslip.
    Given I am on the Live page
    Then Betslip is not displayed
    When I switch to Prematch tab
    Then Prematch tab active has been appeared
    When I add selection to betslip
    Then Betslip selection has been appeared
    When I remove selection from Betslip
    And Betslip is not displayed

  @regression @prematchtab
  Scenario: As a user, I want to select prematch Football sport from sport bar.
    Given I am on the Live page
    Then Betslip is not displayed
    When I switch to Prematch tab
    Then Prematch tab active has been appeared
    And Football sport inactive icon has been appeared

    When I click Football sports icon
    Then Football sport active icon has been appeared 
    And Collapsed category has been appeared

  @regression @prematchtab @join
  Scenario: As a user, I want to open Join page via Header link.
    Given I am on the Live page
    When I switch to Prematch tab
    Then Prematch tab active has been appeared
    And I click on Join now link
    Then Join page layout has been appeared

  @regression @prematchtab @login
  Scenario: As a user, I want to open Login form via header link - check Login popup.
    Given I am on the Live page
    When I switch to Prematch tab
    Then Prematch tab active has been appeared

    When I click on Login link
    Then Login field has been appeared
    And Password field has been appeared
    And Submit button has been appeared
    And Join now popup link has been appeared

  @regression @prematchtab @login
  Scenario: As a user, I want to open Join page from Login popup.
    Given I am on the Live page
    When I switch to Prematch tab
    Then Prematch tab active has been appeared

    When I close cookie popup
    And I click on Login link
    Then Join now popup link has been appeared
    When I click Join now popup link
    Then Join page layout has been appeared 