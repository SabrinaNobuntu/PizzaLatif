/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Use a propriedade `projects` para gerenciar múltiplas configurações
  projects: [
    // Configuração para o backend
    {
      displayName: 'backend',
      preset: 'ts-jest',
      testEnvironment: 'node',
      // Aponta para os arquivos de teste do backend
      testMatch: ['<rootDir>/fontes/backend/src/tests/**/*.spec.ts'],
      // Mapeia o caminho para o Jest encontrar o código-fonte do backend
      rootDir: '<rootDir>',
    },
    // Configuração para o frontend
    {
      displayName: 'frontend',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      // Aponta para os arquivos de teste do frontend
      testMatch: ['<rootDir>/fontes/frontend/src/tests/**/*.spec.ts'],
      // Mapeia o caminho para o Jest encontrar o código-fonte do frontend
      rootDir: '<rootDir>',
    },
  ],
};
