// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('checkAccessability', (context, options) => {
    const terminalLog = violations => {
      cy.task(
        'log',
        `${violations.length} accessibility violation${
          violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`,
      )
      const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
          id,
          impact,
          description,
          nodes: nodes.length,
        }),
      )
  
      cy.task('table', violationData)
    }
  
    cy.checkA11y(context || null, options || null, terminalLog)
  })