describe("Form Login", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    it("it should not to allow a email invalid", () => {
        cy.getByData("botao-login").click();
        cy.getByData("email-input").type("cleyton@gmail");
        cy.getByData("senha-input").type("123456");
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O email digitado é inválido");
    });

    it("it should not to allow a email empty", () => { 
        cy.getByData("botao-login").click();
        cy.getByData("senha-input").type("123456");
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O campo email é obrigatório");
    });

    it("it should not to allow a field empty", () => {
        cy.getByData("botao-login").click();
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O campo de senha é obrigatório")
    })
})