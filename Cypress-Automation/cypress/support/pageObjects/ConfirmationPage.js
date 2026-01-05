class ConfirmationPage
{
    submitFormDetails()
    {
        cy.submitFormDetails()
    }
    getAlertMessage()
    {
        cy.get('.alert-success')
    }
    

}
export default ConfirmationPage;