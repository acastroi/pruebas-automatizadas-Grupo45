describe('Pruebas automatizadas a Ghost con cypress', function() {
	it('Probando funcionalidad Buscar publicaciones', function() {
		cy.visit('http://localhost:2368');
		
		cy.wait(1000);
		cy.get('div.gh-head-actions').within(() => {
			cy.get('button.gh-search').click();
		}); 
		cy.wait(3000);
		
		cy.get('iframe[title="portal-popup"]')
		  .then(($iframe) => {
			const $body = $iframe.contents().find('body')

			cy.wrap($body)
			  .find('input')
			  .type('qatar{enter}');
		  })
		
	})
	it('Probando funcionalidad Buscar publicaciones, ingresando caracteres en mayuscula', function() {
		cy.visit('http://localhost:2368');
		
		cy.wait(1000);
		cy.get('div.gh-head-actions').within(() => {
			cy.get('button.gh-search').click();
		}); 
		cy.wait(3000);
		
		cy.get('iframe[title="portal-popup"]')
		  .then(($iframe) => {
			const $body = $iframe.contents().find('body')

			cy.wrap($body)
			  .find('input')
			  .type('CYPRESS{enter}');
		  })
		
	})
	it('Probando funcionalidad Buscar publicaciones, ingresando varias palabras', function() {
		cy.visit('http://localhost:2368');
		
		cy.wait(1000);
		cy.get('div.gh-head-actions').within(() => {
			cy.get('button.gh-search').click();
		}); 
		cy.wait(3000);
		
		cy.get('iframe[title="portal-popup"]')
		  .then(($iframe) => {
			const $body = $iframe.contents().find('body')

			cy.wrap($body)
			  .find('input')
			  .type('CYPRESS qatar{enter}');
		  })
		
	})
	it('Probando funcionalidad Buscar publicaciones, ingresando caracteres especiales', function() {
		cy.visit('http://localhost:2368');
		
		cy.wait(1000);
		cy.get('div.gh-head-actions').within(() => {
			cy.get('button.gh-search').click();
		}); 
		cy.wait(3000);
		
		cy.get('iframe[title="portal-popup"]')
		  .then(($iframe) => {
			const $body = $iframe.contents().find('body')

			cy.wrap($body)
			  .find('input')
			  .type('%%%{enter}');
		  })
		
	})
})