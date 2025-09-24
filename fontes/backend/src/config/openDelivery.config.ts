// src/openDelivery.config.ts
import * as dotenv from 'dotenv';
dotenv.config(); // carrega o .env automaticamente

export const openDeliveryConfig = {
  // Autenticação OpenDelivery / Azure B2C
  jwksUri: process.env.JWKSURI ?? '',
  port: Number(process.env.PORT_SERVER) || 8080,
  jwtSecret: process.env.JWTSECRET ?? '',
  acceptedCookieDomains: process.env.ACCEPTED_COOKIE_DOMAINS ?? '',
  applicationName: process.env.APPLICATION_NAME ?? '',
  resetAccountPasswordPath: process.env.RESET_ACCOUNT_PASSWORD_PATH ?? '',

  // OAuth / Client Credentials
  clientId: process.env.CLIENT_ID ?? '',
  clientSecret: process.env.CLIENT_SECRET ?? '',
  tenantId: process.env.TENANT_ID ?? '',
  scope: process.env.SCOPE ?? '',
  domainName: process.env.DOMAIN_NAME ?? '',
  authenticationFlowDomainName: process.env.AUTHENTICATION_FLOW_DOMAIN_NAME ?? '',
  tokenIssuer: process.env.TOKEN_ISSUER ?? '',

  // Email
  emailUser: process.env.EMAIL_USER ?? '',
  emailServerHost: process.env.EMAIL_SERVER_HOST ?? '',
  emailServerPort: Number(process.env.EMAIL_SERVER_PORT) || 587,
  emailServerUser: process.env.EMAIL_SERVER_USER ?? '',
  emailServerPassword: process.env.EMAIL_SERVER_PASSWORD ?? '',

  // Criptografia
  encryptionKey: process.env.ENCRYPTION_KEY ?? '',
  encryptionIv: process.env.ENCRYPTION_IV ?? '',

  // Banco de dados Security Tenant
  securityTenant: {
    type: process.env.SECURITY_TENANT_DATABASE_TYPE ?? 'postgres',
    name: process.env.SECURITY_TENANT_DATABASE_NAME ?? '',
    username: process.env.SECURITY_TENANT_DATABASE_USERNAME ?? '',
    password: process.env.SECURITY_TENANT_DATABASE_PASSWORD ?? '',
    host: process.env.SECURITY_TENANT_DATABASE_HOST ?? '',
    port: Number(process.env.SECURITY_TENANT_DATABASE_PORT) || 5432,
    poolSize: process.env.SECURITY_TENANT_DATABASE_POOLSIZE ?? '',
    encryptionKeyTenantPassword: process.env.SECURITY_ENCRYPTION_KEY_TENANT_PASSWORD ?? '',
  },

  // Banco de dados Default Tenant
  defaultTenant: {
    type: process.env.DEFAULT_TENANT_DATABASE_TYPE ?? 'postgres',
    name: process.env.DEFAULT_TENANT_DATABASE_NAME ?? '',
    username: process.env.DEFAULT_TENANT_DATABASE_USERNAME ?? '',
    password: process.env.DEFAULT_TENANT_DATABASE_PASSWORD ?? '',
    host: process.env.DEFAULT_TENANT_DATABASE_HOST ?? '',
    port: Number(process.env.DEFAULT_TENANT_DATABASE_PORT) || 5432,
    poolSize: process.env.DEFAULT_TENANT_DATABASE_POOLSIZE ?? '',
  },

  // Frontend URL
  frontendPath: process.env.FRONTEND_PATH ?? 'http://localhost:4200',
};
