// cypress/support/commands.js
// Cypress.Commands.add('fillSMIS1', () => {
//     cy.visit('https://survey-forms-dev.netlify.app/ml-participant/?section=23');
    
//     // Example steps to fill SMIS 1.0
//     cy.get('[data-testid="gender-select"]').select('Female');
//     //cy.get('[data-testid="age-input"]').type('29');
//     // ...fill other questions...
  
//     cy.get('[data-testid="submit-button"]').click();
  
//     // Save gender to localStorage or alias it for later use
//     cy.window().then((win) => {
//       localStorage.setItem('gender', 'female');
//     });
//   });

Cypress.Commands.add('submitFormDetails',()=>{
  cy.get('#country').type('India')
  cy.get('.suggestions ul li a', { timeout: 15000 }).click()
  cy.get('.btn-success').click()
})
  