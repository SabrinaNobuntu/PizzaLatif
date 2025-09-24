#!/bin/bash
# Script para popular dados iniciais (seeders)

echo "Executando seeders..."

# Carrega variáveis de ambiente do .env
export $(grep -v '^#' .env | xargs)

# Knex
if [ -f "./src/db/knexfile.ts" ]; then
  npx knex --knexfile src/db/knexfile.ts seed:run
else
  # Sequelize
  npx sequelize db:seed:all --config src/db/ormconfig.ts
fi

echo "Seeders concluídos!"
