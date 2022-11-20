Feature: Pruebas

@user1 @web
Scenario: Previsualización de una página en redes sociales
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click login
  And I wait for 7 seconds
  And I click pages
  And I wait for 7 seconds
  And I click all pages
  And I wait for 7 seconds
  And I click published pages
  And I wait for 7 seconds
  And I click published pages
  And I wait for 7 seconds
  And I click on a published page
  And I wait for 7 seconds
  And I click unpublish
  And I wait for 7 seconds