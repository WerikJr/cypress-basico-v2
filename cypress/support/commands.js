Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Werik')
    cy.get('#lastName').type('Junior')
    cy.get('#email').type('werikjr@gmail.com')
    cy.get('#phone').type('998765455')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})