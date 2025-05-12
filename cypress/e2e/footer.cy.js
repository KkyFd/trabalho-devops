describe('Footer Tests', () => {
    it('Deve exibir copyright', () => {
      cy.visit('http://localhost:8080/src/pages/');
      cy.get('.footer').should('contain', '©');
    });
  });
  