describe('Main Page Navigation', () => {
	it('should navigate to the main page', () => {
		cy.visit('http://localhost:5173/');

		cy.url().should('include', 'localhost');

		cy.get('h1').contains('teach');
	});
});
