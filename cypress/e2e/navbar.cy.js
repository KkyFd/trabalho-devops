describe('Navbar Tests', () => {
    it('Deve ter navbar funcional', () => {
      cy.visit('/');

      cy.get('.navbar').should('be.visible');

      cy.get('.navbar-toggler').click();
      cy.get('.nav-link').contains('Projetos').click();
      cy.url().should('include', '/projetos.html');
      cy.wait(500);

      cy.get('.navbar-toggler').click();
      cy.get('.nav-link').contains('Biografia').click();
      cy.url().should('include', '/biografia.html');
      cy.wait(500);

      cy.get('.navbar-toggler').click();
      cy.get('.nav-link').contains('Contato').click({ force: true });
      cy.url().should('include', '/contato.html');
      cy.wait(500);
    });
});
  