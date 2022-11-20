Feature: Ghost pages

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
  And I click pages
  And I wait for 7 seconds
  And I click new page
  And I wait for 7 seconds
  And I click page title
  And I wait for 2 seconds
  And I enter text "Página de pruebas con Kraken"
  And I wait for 2 seconds
  And I click page description
  And I wait for 2 seconds
  And I enter text "Esta es la descripción de la página de pruebas con Kraken"
  And I wait for 2 seconds
  Then I click publish
  And I wait for 7 seconds
  And I click continue final review
  And I wait for 7 seconds
  And I click publish page right now
  And I wait for 7 seconds
  And I click page published
  And I wait for 7 seconds

@user2 @web
Scenario: Previsualización de una página en PC
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
  And I click new page
  And I wait for 7 seconds
  And I click page title
  And I wait for 2 seconds
  And I enter text "Página de pruebas con Kraken"
  And I wait for 2 seconds
  And I click page description
  And I wait for 2 seconds
  And I enter text "Esta es la descripción de la página de pruebas con Kraken"
  And I wait for 2 seconds
  Then I click preview
  And I wait for 7 seconds
  And I click PC preview
  And I wait for 7 seconds

@user3 @web
Scenario: Previsualización de una página en mobile
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
  And I click new page
  And I wait for 7 seconds
  And I click page title
  And I wait for 2 seconds
  And I enter text "Página de pruebas con Kraken"
  And I wait for 2 seconds
  And I click page description
  And I wait for 2 seconds
  And I enter text "Esta es la descripción de la página de pruebas con Kraken"
  And I wait for 2 seconds
  Then I click preview
  And I wait for 7 seconds
  And I click mobile preview
  And I wait for 7 seconds

@user4 @web
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
  And I click new page
  And I wait for 7 seconds
  And I click page title
  And I wait for 2 seconds
  And I enter text "Página de pruebas con Kraken"
  And I wait for 2 seconds
  And I click page description
  And I wait for 2 seconds
  And I enter text "Esta es la descripción de la página de pruebas con Kraken"
  And I wait for 2 seconds
  Then I click preview
  And I wait for 7 seconds
  And I click social networks preview
  And I wait for 7 seconds
