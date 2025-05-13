describe('Teste IDEAL', () => {
    it('Deve verificar se asas do background carregaram', () => {
        cy.visit('/');
        cy.wait(500);
        cy.get('body').should('have.css', 'background-image');

        cy.visit('/src/pages/biografia.html');
        cy.wait(500);
        cy.get('body').should('have.css', 'background-image');

        cy.visit('/src/pages/projetos.html');
        cy.wait(500);
        cy.get('body').should('have.css', 'background-image');

        cy.visit('/src/pages/contato.html');
        cy.wait(500);
        cy.get('body').should('have.css', 'background-image');
    });
});