describe("Register Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("It should register a new user", () => {
        cy.getByData("botao-cadastro").click();
        cy.getByData("nome-input").type("Cleyton Lucas");
        cy.getByData("email-input").type("cleyton@gmail.com");
        cy.getByData("senha-input").type("123456");
        cy.getByData("checkbox-input").click();
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-sucesso").should("exist").and("have.text", "Usuário cadastrado com sucesso!");
    });

    it("It should not register user with invalid email", () => { 
        cy.getByData("botao-cadastro").click();
        cy.getByData("nome-input").type("Cleyton Lucas");
        cy.getByData("email-input").type("cleyton@ami");
        cy.getByData("senha-input").type("123456");
        cy.getByData("checkbox-input").click();
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "Email inválido!")
    });

    it("It should not register user with empty password", () => { 
        cy.getByData("botao-cadastro").click();
        cy.getByData("nome-input").type("Cleyton Lucas");
        cy.getByData("email-input").type("ayrton@gmail.com");
        cy.getByData("checkbox-input").click();
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "Senha é obrigatória!")
    });

    it("It should not register user with invalid password", () => { 
        cy.getByData("botao-cadastro").click();
        cy.getByData("nome-input").type("Cleyton Lucas");
        cy.getByData("email-input").type("cleytonl@gmail.com");
        cy.getByData("senha-input").type("123");
        cy.getByData("checkbox-input").click();
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "Senha inválida!")
    });

    it.only("It should not register user with empty email", () => { 
        cy.getByData("botao-cadastro").click();
        cy.getByData("nome-input").type("Cleyton Lucas");
        cy.getByData("senha-input").type("123");
        cy.getByData("checkbox-input").click();
        cy.getByData("botao-enviar").click();
        cy.getByData("mensagem-erro").should("exist").and("have.text", "O email é obrigatório!")
    });
})