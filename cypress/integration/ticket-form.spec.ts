describe('Successful submission', () => {
    it('api test status validation 200', () => {
        cy.intercept('POST', 'https://api.livechatinc.com/v2/tickets/new', {
            statusCode: 200,
          }).as('ABCD')
          cy.visit('http://localhost:3000/')
        cy.get('#name').type("ABCD")
        cy.get('#email').type("ABCD@ABCD.ABCD")
        cy.get('#subject').type("ABCDSUBJECT")
        cy.get('#message').type("ABCDMESSAGE")
        cy.get('button').click()
      })
    })

    
describe('Unsuccessful submission', () => {
    it('api test status validation 500', () => {
        cy.intercept('POST', 'https://api.livechatinc.com/v2/tickets/new', {
            statusCode: 500,
          }).as('ticketCreate')
        cy.visit('http://localhost:3000/')
        cy.get('#name').type("ABCD")
        cy.get('#email').type("ABCD@ABCD.ABCD")
        cy.get('#subject').type("ABCDSUBJECT")
        cy.get('#message').type("ABCDMESSAGE")
        cy.get('button').click()
     
    })
})

