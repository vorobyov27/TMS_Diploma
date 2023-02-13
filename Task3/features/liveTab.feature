Feature: Main page scenarios - check Live tab.

  @regression @livetab
  Scenario: As a user, I want to open homepage.
    Given I am on the Live page
    Then Event has been appeared
    And Betslip is not displayed
    When I click on event item to open Event page
    Then EventInfo has been appeared

  @regression @livetab
  Scenario: As a user, I want to add live selection to Betslip.
    Given I am on the Live page
    Then Event has been appeared
    And Betslip is not displayed
    When I add selection to betslip
    Then Betslip selection has been appeared
    When I remove selection from Betslip
    And Betslip is not displayed

  @regression @livetab
  Scenario: As a user, I want to enter valid bet to Betslip - check Place bet button.
    Given I am on the Live page
    Then Event has been appeared
    And Betslip is not displayed
    When I add selection to betslip
    Then Betslip selection has been appeared
    When I enter valid bet to betslip
    Then Active Place bet button appears
    When I remove selection from Betslip
    And Betslip is not displayed

  @regression @livetab
  Scenario: As a user, I want to check empty favouries section.
    Given I am on the Live page
    Then Event has been appeared
    When I click favourites sports icon
    Then Favourites sport icon active appears
    And Event is not displayed

  @regression @livetab
  Scenario: As a user, I want to add event to favourites.
    Given I am on the Live page
    Then Event has been appeared
    When I click favourites icon
    And I click favourites sports icon
    Then Favourites sport icon active appears
    And Event has been appeared

    When I click favourites icon
    Then Event is not displayed

  @regression @livetab
  Scenario: As a user, I want to open Football sport via See All link.
    Given I am on the Live page
    Then See All football link has been appeared
    And Football sport inactive icon has been appeared
    And Live tab active has been appeared
    When I click See all football link
    Then Football sport active icon has been appeared
    And Collapsed category has been appeared
    And Live tab active has been appeared

  @regression @livetab
  Scenario: As a user, I want to select Live Football sport from sport bar.
    Given I am on the Live page
    Then Betslip is not displayed
    And Live tab active has been appeared
    And Football sport inactive icon has been appeared

    When I click Football sports icon
    Then Football sport active icon has been appeared 
    And Collapsed category has been appeared
    And Live tab active has been appeared

  @regression @livetab @join
  Scenario: As a user, I want to open Join page via Header link.
    Given I am on the Live page
    When I click on Join now link
    Then Join page layout has been appeared

  @regression @livetab @login
  Scenario: As a user, I want to open Login form via header link - check Login popup.
    Given I am on the Live page
    When I click on Login link
    Then Login field has been appeared
    And Password field has been appeared
    And Submit button has been appeared
    And Join now popup link has been appeared

  @regression @livetab @login
  Scenario: As a user, I want to open Join page from Login popup.
    Given I am on the Live page
    When I close cookie popup
    And I click on Login link
    Then Join now popup link has been appeared
    When I click Join now popup link
    Then Join page layout has been appeared 