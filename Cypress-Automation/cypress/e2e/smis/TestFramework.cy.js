import HomePage from '../../support/pageObjects/HomePage'

describe('End to End ecommerce test', function () {

    before(function () {
        //it runs once before all tests in this block
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new HomePage()
        })
    })

    it('Submit Order', function () {


        const productName = this.data.productName

        //this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/')
        cy.visit(Cypress.env('url') + '/loginpagePractise/') 
        const productPage = this.homepage.login(this.data.username, this.data.password)
        // const productpage = new ProductPage() not needed anymore

        productPage.pageValidation()
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const CartPage = productPage.gotoCart()
        // used in productpage
        // cy.contains('Shop Name').should('be.visible')
        // cy.get('app-card').should('have.length', 4)
        // cy.get('app-card').filter(`:contains(${productName})`)
        //     .then($element => {
        //         cy.wrap($element).should('have.length', 1)
        //         cy.wrap($element).contains('button', 'Add').click()
        //     }
        //     )



        //cy.contains('a', 'Checkout').click()
        //for loop to iterate every iteration
        let sum = 0
        cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                //   // const amount = Number($e1.text().split("  ")[1].trim())
                //         sum = sum + amount
                const amountText = $e1.text().replace(/[^0-9]/g, '') // keep only digits
                const amount = Number(amountText)
                sum = sum + amount
            })
        CartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        })

        const confirmationPage = CartPage.checkOutItems()
        confirmationPage.submitFormDetails()
        //cy.contains('button', 'Checkout').click()
        // cy.get('#country').type('India')
        // cy.get('.suggestions ul li a', { timeout: 10000 }).click()
        // cy.get('.btn-success').click()
        // cy.get('.alert-success').should('contain', 'Success')

    })
})