it("It should is visible the menu burguer in iphone xr", () => {
    cy.visit("/");

    cy.viewport(414, 896);

    cy.getByData("botao-login").click();
    cy.getByData("email-input").type("cleyton@gmail.com");
    cy.getByData("senha-input").type("123456");
    cy.getByData("botao-enviar").click();
    
    cy.location("pathname").should("eq", "/home");

    cy.getByData("menu-burguer").should("be.visible");
});

it("It not should is visible the menu burguer in iphone  Macbook 13", () => {
    cy.visit("/");

    cy.viewport(1280, 800);

    cy.getByData("botao-login").click();
    cy.getByData("email-input").type("cleyton@gmail.com");
    cy.getByData("senha-input").type("123456");
    cy.getByData("botao-enviar").click();

    cy.location("pathname").should("eq", "/home");

    cy.getByData("menu-burguer").should("not.be.visible");
});