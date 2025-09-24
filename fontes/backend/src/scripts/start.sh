#!/bin/bash
# Script para iniciar a aplicação localmente

echo "Iniciando servidor Open Delivery..."

# Carrega variáveis de ambiente do .env
export $(grep -v '^#' .env | xargs)

# Executa o servidor com nodemon para desenvolvimento
npx nodemon src/index.ts

