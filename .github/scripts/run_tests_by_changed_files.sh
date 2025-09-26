#!/usr/bin/env bash
set -euo pipefail

CHANGED_FILES_FILE="${1:-}"
CATEGORY_OVERRIDE="${2:-}"
RULES_FILE="test-rules.json"

if [ -z "$CHANGED_FILES_FILE" ]; then
  echo "Uso: $0 <changed_files.txt> [frontend|backend]"
  exit 1
fi

if ! command -v jq &> /dev/null; then
  echo "Erro: 'jq' não está instalado." >&2
  exit 1
fi

if ! jq empty "$RULES_FILE" &> /dev/null; then
  echo "Erro: O arquivo '$RULES_FILE' não é um JSON válido." >&2
  exit 1
fi

RAN_CATEGORIES=()
REPORT_FILE="relatorio_testes_${CATEGORY_OVERRIDE:-all}.txt"
echo "Relatório de testes (${CATEGORY_OVERRIDE:-all}) - $(date)" > "$REPORT_FILE"

while read -r file; do
  # Limpa espaços e \r
  file=$(printf "%s" "$file" | tr -d '\r' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

  # Normaliza separadores de pasta
  file=$(echo "$file" | tr '\\' '/')

  # Ignora arquivos de lixo
  case "$file" in
    changed_files.txt | relatorio_*.txt | teste.txt | package.json | test-rules.json)
      echo "Ignorando arquivo de lixo: $file" | tee -a "$REPORT_FILE"
      continue
      ;;
  esac

  # Busca categoria usando regex no JSON
  CATEGORY=$(jq -r \
    --arg file "$file" \
    '.rules[] | select($file | test(.pattern)) | .category' \
    "$RULES_FILE" 2>/dev/null || true)

  if [ -n "$CATEGORY" ]; then
    # Busca comando
    CMD=$(jq -r \
      --arg cat "$CATEGORY" \
      '.rules[] | select(.category == $cat) | .cmd' \
      "$RULES_FILE")

    # Verifica override
    if [ -n "$CATEGORY_OVERRIDE" ] && [ "$CATEGORY" != "$CATEGORY_OVERRIDE" ]; then
      echo "Ignorando arquivo: $file → Categoria '$CATEGORY' não é a solicitada ($CATEGORY_OVERRIDE)." | tee -a "$REPORT_FILE"
      continue
    fi

    # Evita rodar a mesma categoria duas vezes
    if [[ " ${RAN_CATEGORIES[*]} " =~ " $CATEGORY " ]]; then
      echo "Ignorando arquivo: $file → Testes da categoria '$CATEGORY' já foram rodados." | tee -a "$REPORT_FILE"
      continue
    fi

    # Executa teste
    echo "📂 Arquivo alterado: $file → Rodando testes da categoria: $CATEGORY" | tee -a "$REPORT_FILE"
    if eval "$CMD"; then
      echo "✅ Testes da categoria '$CATEGORY' passaram" | tee -a "$REPORT_FILE"
    else
      echo "❌ Testes da categoria '$CATEGORY' falharam" | tee -a "$REPORT_FILE"
      exit 1
    fi

    RAN_CATEGORIES+=("$CATEGORY")
  fi

done < "$CHANGED_FILES_FILE"

if [ ${#RAN_CATEGORIES[@]} -eq 0 ]; then
  echo "Nenhuma categoria de teste necessária." | tee -a "$REPORT_FILE"
fi
