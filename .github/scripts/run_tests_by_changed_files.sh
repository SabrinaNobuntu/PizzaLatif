#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"
CHANGED_RAW="${1:-}"
TEST_CATEGORY="${2:-}"

[ -z "$CHANGED_RAW" ] && { echo "Nenhum arquivo alterado. Saindo."; exit 0; }
[ -z "$TEST_CATEGORY" ] && { echo "Erro: Categoria de teste não especificada."; exit 1; }

# Verifica se a ferramenta 'jq' está instalada
if ! command -v jq &> /dev/null; then
  echo "Erro: 'jq' não está instalado. É necessário para processar o JSON." >&2
  exit 1
fi

REPORT="$ROOT_DIR/relatorio_testes.txt"
echo "Relatório de testes - $(date)" > "$REPORT"

# Lendo o JSON e encontrando o comando para a categoria de teste específica
RULES_JSON=$(cat test-rules.json)
RULE_CMD=$(echo "$RULES_JSON" | jq -r ".rules[] | select(.category == \"$TEST_CATEGORY\") | .cmd")

if [ -z "$RULE_CMD" ]; then
  echo "Nenhum comando de teste encontrado para a categoria '$TEST_CATEGORY'." | tee -a "$REPORT"
  exit 0
fi

# Executando o teste
echo "Executando teste para a categoria: $TEST_CATEGORY" | tee -a "$REPORT"
if eval "$RULE_CMD"; then
  echo "✅ Teste OK para '$TEST_CATEGORY'" | tee -a "$REPORT"
else
  echo "❌ Teste FALHOU para '$TEST_CATEGORY'" | tee -a "$REPORT"
  exit 1
fi
