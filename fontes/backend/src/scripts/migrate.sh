#!/bin/bash
# Script para rodar migrations

echo "Executando migrations..."

# Carrega variáveis de ambiente do .env
export $(grep -v '^#' .env | xargs)

# Verifica se está usando Knex
if [ -f "./src/db/knexfile.ts" ]; then
  npx knex --knexfile src/db/knexfile.ts migrate:latest
else
  # Sequelize
  npx sequelize db:migrate --config src/db/ormconfig.ts
fi

echo "Migrations concluídas!"
