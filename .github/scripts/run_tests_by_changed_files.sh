#!/usr/bin/env bash
set -euo pipefail

CHANGED_FILES_FILE="${1:-}"
CATEGORY_OVERRIDE="${2:-}"

if [ -z "$CHANGED_FILES_FILE" ]; then
  echo "Usage: $0 <changed_files.txt> [frontend|backend]"
  exit 1
fi

if ! command -v jq &> /dev/null; then
  echo "Erro: 'jq' não está instalado." >&2
  exit 1
fi

RULES_JSON=$(cat test-rules.json)
RAN_CATEGORIES=()

# Define o nome do arquivo de relatório
REPORT_FILE="relatorio_testes_${CATEGORY_OVERRIDE}.txt"
echo "Relatório de testes (${CATEGORY_OVERRIDE}) - $(date)" > "$REPORT_FILE"

while read -r file; do
  # Processa apenas arquivos JS/TS/SH
  if [[ -n "$file" && "$file" =~ \.(js|ts|jsx|tsx|sh)$ ]]; then
    # Descobre a categoria do arquivo
    CATEGORY=$(echo "$RULES_JSON" | jq -r ".rules[] | select(\"$file\" | test(.pattern)) | .category")
    CMD=$(echo "$RULES_JSON" | jq -r ".rules[] | select(\"$file\" | test(.pattern)) | .cmd")

    # Se houver categoria e ainda não tiver rodado, executa
    if [ -n "$CATEGORY" ] && [[ ! " ${RAN_CATEGORIES[*]} " =~ " $CATEGORY " ]]; then
      # Se houver override de categoria, só roda se bater
      if [ -n "$CATEGORY_OVERRIDE" ] && [ "$CATEGORY" != "$CATEGORY_OVERRIDE" ]; then
        continue
      fi

      echo "📂 Arquivo alterado: $file → Rodando testes da categoria: $CATEGORY" | tee -a "$REPORT_FILE"

      if eval "$CMD"; then
        echo "✅ Testes da categoria '$CATEGORY' passaram" | tee -a "$REPORT_FILE"
      else
        echo "❌ Testes da categoria '$CATEGORY' falharam" | tee -a "$REPORT_FILE"
        exit 1
      fi

      RAN_CATEGORIES+=("$CATEGORY")
    fi
  else
    echo "Ignorando arquivo: $file" | tee -a "$REPORT_FILE"
  fi
done < "$CHANGED_FILES_FILE"

if [ ${#RAN_CATEGORIES[@]} -eq 0 ]; then
  echo "Nenhuma categoria de teste necessária." | tee -a "$REPORT_FILE"
fi
