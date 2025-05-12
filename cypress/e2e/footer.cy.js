describe('Footer Tests', () => {
    it('Deve exibir copyright', () => {
      cy.visit('/src/pages/index.html');
      cy.get('.footer').should('contain', '©');
      cy.wait(500);

      cy.visit('/src/pages/biografia.html');
      cy.get('.footer').should('contain', '©');
      cy.wait(500);

      cy.visit('/src/pages/projetos.html');
      cy.get('.footer').should('contain', '©');
      cy.wait(500);

      cy.visit('/src/pages/contato.html');
      cy.get('.footer').should('contain', '©');
      cy.wait(500);
    });
  });
  