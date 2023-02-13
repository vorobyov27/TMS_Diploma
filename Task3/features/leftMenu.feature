Feature: Left menu scenarios.

  @regression @leftmenu
  Scenario: As a user, I want to open left menu and check elements.
    Given I am on the Live page
    When I open left menu via header
    Then results link off has been appeared
    And statistics link off has been appeared
    And download_app link off has been appeared
    And offers link off has been appeared
    And promotions link off has been appeared
    And sport.live.popular link on has been appeared
    And casino link off has been appeared
    And live-casino link off has been appeared
    And live-games link off has been appeared
    And virtual-sports link off has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Casino via Left menu.
    Given I am on the Live page
    When I open left menu via header
    Then casino link off has been appeared
    When I click casino link off
    Then All Games active tab has been appeared
    When I open left menu via header
    Then casino link on has been appeared
    And sport.live.popular link off has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Results page via Left Menu.
    Given I am on the Live page
    When I open left menu via header
    And I click results link off
    Then Scroll tab results has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Statistic page via Left Menu.
    Given I am on the Live page
    When I open left menu via header
    And I click statistics link off
    Then Tournament statistic list has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Download page via Left Menu.
    Given I am on the Live page
    When I open left menu via header
    And I click download_app link off
    Then Download promo title has been appeared

  @regression @leftmenu @login
  Scenario: As a user, I want to open Login popup via Left Menu Loyalty option.
    Given I am on the Live page
    When I open left menu via header
    And I click offers link off
    Then Login field has been appeared 
