describe("logueo para acceder a las funcionalidades de ghost", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2368/ghost/");
  });

  it("Recuperar contraseña de acceso a ghost sin ingresar nombre de usuario", () => {
    cy.get("#ember9 > span").click();
    cy.get('.main-error').should("contain","We need your email address to reset your password!");
  });

  it("Recuperar contraseña de acceso a ghost con nombre de usuario correcto", () => {
    cy.fixture('login.json').then((login) => {
     cy.get("#ember6").type(login.userName);
    });
    cy.get("#ember9 > span").click();
    cy.get('.main-error').should("contain","");


  })

});
