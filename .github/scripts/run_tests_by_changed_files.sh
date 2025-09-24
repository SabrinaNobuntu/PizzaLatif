#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"

CHANGED_RAW="${1:-}"
if [ -z "$CHANGED_RAW" ]; then
  echo "Nenhum arquivo alterado recebido. Saindo."
  exit 0
fi

read -r -a files <<< "$CHANGED_RAW"

run_frontend=false
run_backend=false
run_python=false
run_integration=false

for f in "${files[@]}"; do
  echo "-> examinado: $f"
  [[ "$f" == fontes/frontend/* ]] && run_frontend=true
  [[ "$f" == fontes/backend/* || "$f" == server/* ]] && run_backend=true
  [[ "$f" == *.py || "$f" == scripts/python* ]] && run_python=true
  [[ "$f" == docker/* || "$f" == infra/* ]] && run_integration=true
done

run_test() {
  local dir="$1"
  local cmd="$2"
  if [ -d "$dir" ]; then
    echo "Executando testes em $dir..."
    cd "$dir"
    eval "$cmd" || { echo "Testes em $dir falharam"; exit 1; }
    cd "$ROOT_DIR"
  else
    echo "Diretório $dir não encontrado — pulando."
  fi
}

$run_frontend && run_test "fontes/frontend" "npm ci && npm test -- --watchAll=false"
$run_backend && run_test "fontes/backend" "npm ci && npm test"
$run_python && { echo "Executando pytest..."; python -m pip install -r requirements.txt; pytest -q || { echo "PyTest falhou"; exit 1; }; }
$run_integration && echo "Executando testes de integração... (exemplo)"

if ! $run_frontend && ! $run_backend && ! $run_python && ! $run_integration; then
  echo "Nenhum teste mapeado para os arquivos modificados. Nada a executar."
fi
