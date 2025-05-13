describe('Home Page Tests', () => {
    it('Deve carregar a página inicial', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.contains('Yi Sang');
    });

    it('Deve carregar a imagem inicial', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get('.container img').should('exist');
    });
  });
  