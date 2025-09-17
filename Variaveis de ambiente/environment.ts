export const environment = { 
    applicationTitle: "ExemploTitulo", 
    backendUrl: "http://localhost:8080", 
    frontendUrl: "http://localhost:4200", 
    menuPath: "../../../../assets/dicionario/menu/menu.json", 

    // Dados Relacionados ao Azure AD B2C 
    providerUriB2C: "https://allystore.b2clogin.com",
    providerMicrosoftUri: "https://allystore.onmicrosoft.com",
    microsoftLoginUri: "https://login.microsoftonline.com",
    tenantId: "b46b5b87-a08e-487b-ae9b-fec172a9a90b",
    grantType: "authorization_code",
    redirectUri: "callback",
    clientId: "c3965db2-c74a-4d13-8a85-cea18afbe9fa",
    grant_type: "authorization_code",
    scope: "/tasks-api2/tasks.read offline_access",

    customersJSONPath: '../../../../assets/dicionario/customers.json', 
    customersAPIPath: 'http://localhost:8080/api/api/customers', 
};
