Feature: Left menu scenarios.

  @regression @leftmenu
  Scenario: As a user, I want to open left menu and check elements.
    Given I am on the Live page
    When I open left menu via header
    Then Result link has been appeared
    And Statistic link has been appeared
    And Download link has been appeared
    And Loyalty link has been appeared
    And Promotions link has been appeared
    And Sport active option has been appeared
    And Casino inactive option has been appeared
    And Live Casino inactive option has been appeared
    And Live Games inactive option has been appeared
    And Virtual Sports inactive option has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Casino via Left menu.
    Given I am on the Live page
    When I open left menu via header
    Then Casino inactive option has been appeared

    When I click Casino inactive option to open Casino page
    Then All Games active tab has been appeared
    When I open left menu via header
    Then Casino active option has been appeared
    And Sport inactive option has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Results page via Left Menu.
    Given I am on the Live page
    When I open left menu via header
    And I click Results option to open Results page
    Then Scroll tab results has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Statistic page via Left Menu.
    Given I am on the Live page
    When I open left menu via header
    And I click Statistic option to open Statistic page
    Then Tournament statistic list has been appeared

  @regression @leftmenu
  Scenario: As a user, I want to open Download page via Left Menu.
    Given I am on the Live page
    When I open left menu via header
    And I click Download option to open Download page
    Then Download promo title has been appeared

  @regression @leftmenu @login
  Scenario: As a user, I want to open Login popup via Left Menu Loyalty option.
    Given I am on the Live page
    When I open left menu via header
    And I click Loyalty option
    Then Login field has been appeared 
