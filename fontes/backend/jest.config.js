/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Use a propriedade `projects` para gerenciar múltiplas configurações
  projects: [
    // Configuração para o backend
    {
      displayName: 'backend',
      preset: 'ts-jest',
      testEnvironment: 'node',
      // Define a raiz do projeto backend
      rootDir: '<rootDir>/fontes/backend',
      // Aponta para os arquivos de teste do backend
      testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],
    },
    // Configuração para o frontend
    {
      displayName: 'frontend',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      // Define a raiz do projeto frontend
      rootDir: '<rootDir>/fontes/frontend',
      // Aponta para os arquivos de teste do frontend
      testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],
    },
  ],
};
