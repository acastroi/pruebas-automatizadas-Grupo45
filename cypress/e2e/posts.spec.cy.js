describe('Pruebas automatizadas a Ghost con cypress', function() {
	it('Probando funcionalidad Posts, creando una publicación en Draft', function() {
		cy.visit('http://localhost:2368/ghost');
		
		cy.wait(1000);
		cy.get('form').within(() => {
			cy.get('input[name="identification"]').type('a.castroi@uniandes.edu.co')
			cy.get('input[name="password"]').type('p1d4f13r2022')
			cy.get('button.login').click()
		});
		cy.wait(1000);
		cy.get('li.gh-nav-list-new.relative').within(() => {
			cy.get('a[href="#/posts/"]').click();
		});
		cy.wait(1000);
		cy.get('a.gh-btn.gh-btn-primary').click();
		cy.get('textarea[placeholder="Post title"]').type('Mundial de Qatar 2022')
		cy.get('div.koenig-editor__editor').type('Historias de los juegos de futbol más importantes de la copa del mundo 2022')
		cy.get('a.ember-view.gh-btn-editor.gh-editor-back-button').click();
	})
	it('Probando funcionalidad Posts, creando una publicación y publicando', function() {
		cy.visit('http://localhost:2368/ghost');
		
		cy.wait(1000);
		cy.get('form').within(() => {
			cy.get('input[name="identification"]').type('a.castroi@uniandes.edu.co')
			cy.get('input[name="password"]').type('p1d4f13r2022')
			cy.get('button.login').click()
		});
		cy.wait(1000);
		cy.get('li.gh-nav-list-new.relative').within(() => {
			cy.get('a[href="#/posts/"]').click();
		});
		cy.wait(1000);
		cy.get('a.gh-btn.gh-btn-primary').click();
		cy.get('textarea[placeholder="Post title"]').type('Estadios de Qatar')
		cy.get('div.koenig-editor__editor').type('Información relevante sobre los escenarios de juego del futbol en Qatar')
		cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
		cy.wait(1000);
		cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
		cy.wait(1000)
		cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
	})
	it('Probando funcionalidad Posts, creando una publicación y publicando', function() {
		cy.visit('http://localhost:2368/ghost');
		
		cy.wait(1000);
		cy.get('form').within(() => {
			cy.get('input[name="identification"]').type('a.castroi@uniandes.edu.co')
			cy.get('input[name="password"]').type('p1d4f13r2022')
			cy.get('button.login').click()
		});
		cy.wait(1000);
		cy.get('li.gh-nav-list-new.relative').within(() => {
			cy.get('a[href="#/posts/"]').click();
		});
		cy.wait(1000);
		cy.get('a.gh-btn.gh-btn-primary').click();
		cy.get('textarea[placeholder="Post title"]').type('Estadios de Qatar')
		cy.get('div.koenig-editor__editor').type('Información relevante sobre los escenarios de juego del futbol en Qatar')
		cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
		cy.wait(1000);
		cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
		cy.wait(1000)
		cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
	})
	it('Probando funcionalidad Posts, consultando Drafts', function() {
		cy.visit('http://localhost:2368/ghost');
		
		cy.wait(1000);
		cy.get('form').within(() => {
			cy.get('input[name="identification"]').type('a.castroi@uniandes.edu.co')
			cy.get('input[name="password"]').type('p1d4f13r2022')
			cy.get('button.login').click()
		});
		cy.wait(1000);
		cy.get('a[title="Drafts"]').click();
	})
	
})