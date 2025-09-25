#!/usr/bin/env bash
set -euo pipefail

CHANGED_FILES_FILE="${1:-}"

[ -z "$CHANGED_FILES_FILE" ] && { echo "Nenhum arquivo alterado. Saindo."; exit 0; }

if ! command -v jq &> /dev/null; then
  echo "Erro: 'jq' não está instalado." >&2
  exit 1
fi

RULES_JSON=$(cat test-rules.json)
RAN_CATEGORIES=()

while read -r file; do
  if [[ -n "$file" && "$file" =~ \.(js|ts|jsx|tsx|sh)$ ]]; then
    CATEGORY=$(echo "$RULES_JSON" | jq -r ".rules[] | select(\"$file\" | test(.pattern)) | .category")
    CMD=$(echo "$RULES_JSON" | jq -r ".rules[] | select(\"$file\" | test(.pattern)) | .cmd")

    if [ -n "$CATEGORY" ] && [[ ! " ${RAN_CATEGORIES[*]} " =~ " $CATEGORY " ]]; then
      echo "📂 Arquivo alterado: $file → Rodando testes da categoria: $CATEGORY"
      if eval "$CMD"; then
        echo "✅ Testes da categoria '$CATEGORY' passaram"
      else
        echo "❌ Testes da categoria '$CATEGORY' falharam"
        exit 1
      fi
      RAN_CATEGORIES+=("$CATEGORY")
    fi
  else
    echo "Ignorando arquivo: $file"
  fi
done < "$CHANGED_FILES_FILE"

if [ ${#RAN_CATEGORIES[@]} -eq 0 ]; then
  echo "Nenhuma categoria de teste necessária."
fi
