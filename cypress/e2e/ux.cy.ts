// const { v4: uuidv4 } = require('uuid');

describe('ux', () => {
    it('user view exchanges', () => {
        // main page
        // visit first exchange page
        cy.visit('http://localhost:3000')
        cy.findAllByText('Cayman Islands').then(els => {
            console.log('els', els)
            cy.wrap(els[0]).click()
        })
        cy.findByRole('link', {  name: /website/i})
        // return to home
        // visit further exchange
    })
})