#!/bin/bash
# Script para verificar se o servidor está rodando

SERVER_URL="http://localhost:8080/health"

echo "Checando health do servidor em $SERVER_URL ..."

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SERVER_URL)

if [ $HTTP_CODE -eq 200 ]; then
  echo "Servidor OK (status 200)"
else
  echo "Servidor com problema (status $HTTP_CODE)"
fi
