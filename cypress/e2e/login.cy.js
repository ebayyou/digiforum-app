describe('Login flow spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display HomePage correctly', () => {
    cy.get('.headers__heading').should('be.visible');
    cy.get('.wrapper__img').should('be.visible');
    cy.get('.homepage__btn')
      .contains(/^Go to #Threads$/)
      .click();
  });

  it('should display alert when email is empty', () => {
    cy.get('.nav__button')
      .contains(/^Login$/)
      .click();

    cy.get('.auth__button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('.nav__button')
      .contains(/^Login$/)
      .click();

    cy.get('input[placeholder="Example@gmail.com"]').type('hello123@gmail.com');

    cy.get('.auth__button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('.nav__button')
      .contains(/^Login$/)
      .click();

    cy.get('input[placeholder="Example@gmail.com"]').type('hello123@gmail.com');
    cy.get('input[placeholder="Your password is..."]').type('awdawd');

    cy.get('.auth__button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('.nav__button')
      .contains(/^Login$/)
      .click();

    cy.get('input[placeholder="Example@gmail.com"]').type('hello123@gmail.com');
    cy.get('input[placeholder="Your password is..."]').type('hello123');

    cy.get('.auth__button')
      .contains(/^Login$/)
      .click();

    cy.get('.headers__heading').should('be.visible');
    cy.get('.homepage__btn')
      .contains(/^Go to #Threads$/)
      .click();
  });
});
