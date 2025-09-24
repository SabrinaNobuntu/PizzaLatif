#!/usr/bin/env bash
set -euo pipefail

# raiz do repositório
ROOT_DIR="$(pwd)"

# caminho do JSON de regras
RULES_FILE="$ROOT_DIR/test-rules.json"
if [ ! -f "$RULES_FILE" ]; then
  echo "Arquivo test-rules.json não encontrado em $ROOT_DIR"
  exit 1
fi

# arquivos modificados passados como argumento
CHANGED_RAW="${1:-}"
if [ -z "$CHANGED_RAW" ]; then
  echo "Nenhum arquivo alterado recebido. Saindo."
  exit 0
fi

# transforma em array (space-separated)
read -r -a files <<< "$CHANGED_RAW"

# flags de decisão
run_frontend=false
run_backend=false
run_python=false
run_integration=false

# analisar arquivos modificados
for f in "${files[@]}"; do
  echo "-> examinado: $f"
  
  if [[ "$f" == fontes/frontend/* || "$f" == *.html || "$f" == *.css || "$f" == package-lock.json && "$f" == fontes/frontend* ]]; then
    run_frontend=true
  fi

  if [[ "$f" == fontes/backend/* || "$f" == server/* || "$f" == *.js || "$f" == *.ts ]]; then
    run_backend=true
  fi

  if [[ "$f" == *.py || "$f" == scripts/python* ]]; then
    run_python=true
  fi

  if [[ "$f" == docker/* || "$f" == infra/* ]]; then
    run_integration=true
  fi
done

# função para executar comandos de teste
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

# executar frontend
if $run_frontend; then
  run_test "fontes/frontend" "npm ci && npm test -- --watchAll=false"
fi

# executar backend
if $run_backend; then
  run_test "fontes/backend" "npm ci && npm test"
fi

# executar python
if $run_python; then
  echo "Executando pytest..."
  python -m pip install -r requirements.txt
  pytest -q || { echo "PyTest falhou"; exit 1; }
fi

# executar integração
if $run_integration; then
  echo "Executando testes de integração..."
  # exemplo: docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit
fi

# nenhuma flag acionada
if ! $run_frontend && ! $run_backend && ! $run_python && ! $run_integration; then
  echo "Nenhum teste mapeado para os arquivos modificados. Nada a executar."
fi
