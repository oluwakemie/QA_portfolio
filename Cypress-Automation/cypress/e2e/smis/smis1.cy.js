describe('TC_SMIS1_001 - Mobile View: Verify Location Detection or Manual Input', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr'); // ✅ simulate iPhone screen size
    });
    
    it.skip('Should display the welcome page',() =>{

      cy.wait(2000);
        cy.get('img[alt="sproxil"], .logo, img[alt*="SMIS"]').should('be.visible');
        cy.get('h2:nth-child(1)')
        .should('have.text', "Help Shape Nigeria's Fight Against Malaria")
        cy.get('.mis-long-survey_introduction_wrapper__cJGku > :nth-child(2)')  

        cy.get('.mis-long-survey_introduction_icons__mdoSL > :nth-child(1)')
        .should('have.text', "Quick 15-minute survey");
        cy.get('.mis-long-survey_introduction_icons__mdoSL > :nth-child(2)')
        .should('have.text', "100% confidential responses")
        cy.get('.mis-long-survey_introduction_icons__mdoSL > :nth-child(3)')
        .should('have.text',"Get back ₦2,000 Naira in airtime instantly");
        cy.get('.mis-long-survey_consent__0kqHZ > :nth-child(1)')
        .should('have.text', "Starting survey indicates that you agree to the Terms & Conditions")  
       cy.get('.mis-long-survey_consent__0kqHZ > :nth-child(3)')
        .should('have.text', "Together, we can defeat malaria in Nigeria") 
        cy.get('img[alt="gates foundation"], .logo, img[alt="gates foundation"]')
        .should('be.visible');
        cy.get('img[alt="nmep"], .logo, img[alt="nmep"]')
        .should('be.visible');
        cy.get('button').click().wait(8000)
        
      })
      it.skip('Should display Demographics section', ()=>{
        cy.contains('Demographics')
        .should('be.visible')
        cy.contains('We need a few details to understand your background. Your responses help improve malaria prevention efforts.')
      })
  
    it.skip('Should auto-detect location or allow manual location input', () => {
    
  
      cy.wait(2000); // Wait for components to load — replace with smart waits in real tests
  
      // Check for manual input visibility
      cy.get('select').first().then(($el) => {
        if ($el.is(':visible')) {
          // Manual input flow
          cy.wrap($el).select('Lagos');
          cy.get('select').eq(1).select('Ikeja');
          cy.get('input[placeholder="Town"]').type('Ogba');
  
          cy.get('select').first().should('have.value', 'Lagos');
          cy.get('select').eq(1).should('have.value', 'Ikeja');
          cy.get('input[placeholder="Town"]').should('have.value', 'Ogba');
        } else {
          // Location is likely auto-detected
          cy.log('Location auto-detected. Manual inputs hidden or pre-filled.');
        }
      });
    });
  });
  