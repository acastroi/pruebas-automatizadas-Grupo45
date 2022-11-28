import {faker} from '@faker-js/faker'

describe('Crear, editar y borrar una página en ghost', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/');
  })

  it('Ingresar a ghost y crear página', () => {
    cy.fixture('login.json').then((login) => {
      cy.get("#ember6").type(login.userName);
      cy.get('#ember8').type(login.password);
    })
    cy.get('#ember10 > span').click();

    cy.get('a[href*="#/pages/"]').click();
    // cy.xpath('//[@id="ember241"]').click();
    cy.get('[id^=ember]').contains("New page").click();
    // cy.xpath("/html/body/div[2]/div/main/section/div/header/section/a/span").contains("New page").click();
    // cy.get('.gh-editor-title').type("Pruebas automatizadas");
    cy.get('.gh-editor-title').scrollIntoView().focus().type(faker.name.jobTitle());
    // cy.get(".koenig-editor__editor").type('Este texto hace parte de una prueba automatizada para crear una nueva página usando el sistema gestor de contenidos ghost');
    cy.get(".koenig-editor__editor").scrollIntoView().focus().type(faker.lorem.paragraph());
    cy.get(".darkgrey > span").click();
    cy.get(".gh-publish-cta > .gh-btn > span").click();
    cy.xpath("/html/body/div[4]/div/div/div/div[3]/button/span").click();
    cy.xpath("/html/body/div[4]/div/div/div/div[2]/button[1]/span").click();
  })

  it("Ingresar a ghost y editar una página", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#ember6").type(login.userName);
      cy.get("#ember8").type(login.password);
    });
    cy.get("#ember10 > span").click();
    cy.get('a[href*="#/pages/"]').click();
    cy.get(".darkgrey > span").click();
    cy.get(".gh-publish-cta > .gh-btn > span").click();
    cy.xpath("/html/body/div[4]/div/div/div/div[2]/button[1]/span").click();
  });

  it("Ingresar a ghost y borrar una página", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#ember6").type(login.userName);
      cy.get("#ember8").type(login.password);
    });
    cy.get("#ember10 > span").click();
    cy.get('a[href*="#/pages/"]').click();
    cy.xpath("/html/body/div[2]/div/main/section/section/div[1]/ol/li[1]/a[4]/div/a").click();
    cy.get('button[title="Settings"]').click();
    cy.get('button[title="Settings" > span]').contains("Delete").click();
    cy.get('.modal-.gh-btn-red').click();

  });

});