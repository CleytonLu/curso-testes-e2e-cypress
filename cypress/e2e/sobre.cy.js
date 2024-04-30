describe("It should to do test int page login", () => {
    it("it should check the text about benefits", () => {
        cy.visit("http://localhost:3000");
        cy.get('[data-cy="sobre"]').should("contain", "Vantagens do nosso banco:");
    })
})