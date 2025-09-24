#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"
CHANGED_RAW="${1:-}"
[ -z "$CHANGED_RAW" ] && { echo "Nenhum arquivo alterado. Saindo."; exit 0; }

read -r -a files <<< "$CHANGED_RAW"

REPORT="$ROOT_DIR/relatorio_testes.txt"
echo "Relatório de testes - $(date)" > "$REPORT"

run_frontend=false
run_backend=false
run_python=false

for f in "${files[@]}"; do
  [[ "$f" == fontes/frontend/* ]] && run_frontend=true
  [[ "$f" == fontes/backend/* ]] && run_backend=true
  [[ "$f" == *.py ]] && run_python=true
done

run_test() {
  local dir="$1"
  local cmd="$2"
  if [ -d "$dir" ]; then
    echo "Executando testes em $dir..." | tee -a "$REPORT"
    cd "$dir"
    if eval "$cmd"; then
      echo "✅ Testes em $dir OK" | tee -a "$REPORT"
    else
      echo "❌ Testes em $dir FALHARAM" | tee -a "$REPORT"
      cd "$ROOT_DIR"
      return 1
    fi
    cd "$ROOT_DIR"
  else
    echo "Diretório $dir não encontrado — pulando." | tee -a "$REPORT"
  fi
}

$run_frontend && run_test "fontes/frontend" "npm ci && npm test -- --watchAll=false"
$run_backend && run_test "fontes/backend" "npm ci && npm test"
$run_python && { python -m pip install -r requirements.txt; pytest -q || exit 1; }

[ $run_frontend = false ] && [ $run_backend = false ] && [ $run_python = false ] && echo "Nenhum teste mapeado." | tee -a "$REPORT"
