//<reference types="cypress" />

describe('My Second Test Cases', function () {

    //CHECKBOX TEST CASES

    it('My SecondTest case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])



    //STATIC DROPDOWN TEST CASES

    cy.get('select').select('option2').should('have.value', 'option2')


         //DYNAMIC DROPDOWN TEST CASES
    cy.get('#autocomplete').type('Nig')
    cy.get('.ui-menu-item div').each(($e1, indexedDB, $list) => {
        
        if($e1.text()==="Nigeria")
        {
            $e1.click();
        }
        cy.get('#autocomplete').should('have.value', 'Nigeria')
    })
    //HIDE AND SHOW TEXTBOX TEST CASES
    cy.get('#autocomplete').should('have.value', 'Nigeria')

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()


    //RADIO BUTTON TEST CASES
    cy.get('[value="radio2"]').check().should('be.checked')

   //WINDOWS ALERT TEST CASES

    })

    
   
    
        
})