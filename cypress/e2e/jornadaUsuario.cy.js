describe("User journey", () => {
    it("it should the user to do login, make a transaction, and log out", () => {
        cy.visit("/");

        cy.getByData("botao-login").click();
        cy.getByData("email-input").type("cleyton@gmail.com");
        cy.getByData("senha-input").type("123456");
        cy.getByData("botao-enviar").click();

        cy.location("pathname").should("eq", "/home");

        cy.getByData("select-opcoes").select("Transferência");
        cy.getByData("form-input").type("80");
        cy.getByData("realiza-transacao").click();
        cy.getByData("lista-transacoes").find("li").last().contains("- R$ 80");
        cy.getByData("botao-sair").click();

        cy.location("pathname").should("eq", "/");
    });

    it.only("It should to do register and login", () => {
        cy.visit("/");

        cy.getByData("botao-cadastro").click();
        cy.getByData("nome-input").type("Camilo Ferreira");
        cy.getByData("email-input").type("camiloferreira@gmail.com");
        cy.getByData("senha-input").type("123456");
        cy.getByData("checkbox-input").click();
        cy.getByData("botao-enviar").click();

        cy.getByData("botao-login").click();
        cy.getByData("email-input").type("camiloferreira@gmail.com");
        cy.getByData("senha-input").type("123456");
        cy.getByData("botao-enviar").click();

        cy.location("pathname").should("eq", "/home");

    })
})