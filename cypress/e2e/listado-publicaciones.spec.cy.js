describe('Pruebas automatizadas a Ghost con cypress', function() {
	it('Probando listado de publicaciones, ver detalle con clic en imagen', function() {
		cy.visit('http://localhost:2368');
		
		for (var i = 0; i < 2; i++) {
			cy.get('a.post-card-image-link').eq(i).click();
			cy.wait(1000);
			cy.get('li.nav-home').within(() => {
				cy.get('a').click();
			});
			cy.wait(1000);
		}		
	})
	
	it('Probando listado de publicaciones, ver detalle con clic en texto', function() {
		cy.visit('http://localhost:2368');
		
		for (var i = 0; i < 2; i++) {
			cy.get('a.post-card-content-link').eq(i).click();
			cy.wait(1000);
			cy.get('li.nav-home').within(() => {
				cy.get('a').click();
			});
			cy.wait(1000);
		}		
	})
	
	it('Probando detalle de publicación, ver otro detalle con clic en la imagen de otra publicación', function() {
		cy.visit('http://localhost:2368');
		
		for (var i = 0; i < 2; i++) {
			cy.get('a.post-card-image-link').eq(i).click();
			cy.wait(1000);
			for (var j = 0; j < 1; j++) {
				cy.get('a.post-card-image-link').eq(j).click();
				cy.wait(1000);
				for (var k = 0; k < 1; k++) {
					cy.get('a.post-card-image-link').eq(k).click();
					cy.wait(1000);
				}
			}
			cy.get('li.nav-home').within(() => {
				cy.get('a').click();
			});
			cy.wait(1000);
		}
	})
	
	it('Probando detalle de publicación, ver otro detalle con clic en el texto de otra publicación', function() {
		cy.visit('http://localhost:2368');
		
		for (var i = 0; i < 2; i++) {
			cy.get('a.post-card-content-link').eq(i).click();
			cy.wait(1000);
			for (var j = 0; j < 1; j++) {
				cy.get('a.post-card-content-link').eq(j).click();
				cy.wait(1000);
				for (var k = 0; k < 1; k++) {
					cy.get('a.post-card-content-link').eq(k).click();
					cy.wait(1000);
				}
			}
			cy.get('li.nav-home').within(() => {
				cy.get('a').click();
			});
			cy.wait(1000);
		}
	})
	
		
})

