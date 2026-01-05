//<reference types="cypress" />

describe('My Second Test Cases', function () {

    //CHECKBOX TEST CASES

    it('My FourTest case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        

    // ALERTS TEST CASES
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]')

    })
    
    it('Should handle child windows', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.origin("https://www.qaclickacademy.com", function()
        {
            cy.get('#navbarSupportedContent a[href*="about"]').click();
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy ')
        })
        
    })
    
   
    
        
})