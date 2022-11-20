Feature: Ghost dashboard

@user1 @web
Scenario: Creación de una página
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click login
  And I wait for 7 seconds