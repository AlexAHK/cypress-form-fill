// Sales / Business Development (fill all fields)
// Product Support / Customer Care (fill all fields)

describe('it goes to the contact page and fills out both forms', () => {
    beforeEach( () => {
        cy.visit('/');
    });

    it('fills out Sales form and then the Customer Care form', () => {

        // could get the correct iframe via the src attribute
        // OR find the title and then navigate to the iframe that comes next

        const getIframeDocument1 = () => {
            return cy
                .contains('Sales / Business Development')
                .parent()
                .next('iframe')
                .its('0.contentDocument').should('exist')
          };
          
        const getIframeBody1 = () => {
            return getIframeDocument1()
                .its('body').should('not.be.undefined')
                .then(cy.wrap)
        };

        getIframeBody1().find('#pardot-form > .form-field.Full_Name')
            .children('label').contains('Name')
            .next('input')
            .type('somebody');

        getIframeBody1().find('#pardot-form > .form-field.company')
            .children('label').contains('Company Name')
            .next('input')
            .type('My Company');

        getIframeBody1().find('#pardot-form > .form-field.email')
            .children('label').contains('Email')
            .next('input')
            .type('myemail@gmail.com');

        getIframeBody1().find('#pardot-form > .form-field.phone')
            .children('label').contains('Phone Number')
            .next('input')
            .type('416-123-4567');

        getIframeBody1().find('#pardot-form > .form-field.How_many_payments_do_you_accept_monthly_')
            .children('label').contains('How many payments do you accept monthly?')
            .next('select')
            .select('1447149');

        getIframeBody1().find('#pardot-form > .form-field.comments')
            .children('label').contains('Comments/Questions')
            .next('textarea')
            .type('A ty govorish\' po russki?');

        const getIframeDocument2 = () => {
            return cy
                .contains('Product Support / Customer Care')
                .parent()
                .next('iframe')
                .its('0.contentDocument').should('exist')
          };
          
        const getIframeBody2 = () => {
            return getIframeDocument2()
                .its('body').should('not.be.undefined')
                .then(cy.wrap)
        };
                
        getIframeBody2().find('#pardot-form > .form-field.Are_you_looking_to_pay_a_bill_.pd-select.required')
            .children('label').contains('Are you looking to pay a bill?')
            .next('select')
            .select('1409115');

        getIframeBody2().find('.form-field.Full_Name')
            .children('label').contains('Name')
            .next('input')
            .type('somebody else');

        getIframeBody2().find('#pardot-form > .form-field.company')
            .children('label').contains('Company or Biller')
            .next('input')
            .type('My Company 2');

        getIframeBody2().find('#pardot-form > .form-field.email')
            .children('label').contains('Email')
            .next('input')
            .type('myemail2@gmail.com');

        getIframeBody2().find('#pardot-form > .form-field.phone')
            .children('label').contains('Phone Number')
            .next('input')
            .type('905-123-4567');

        getIframeBody2().find('#pardot-form > .form-field.comments')
            .children('label').contains('Comments/Questions')
            .next('textarea')
            .type('¿Hablas español?');    
    });
});

