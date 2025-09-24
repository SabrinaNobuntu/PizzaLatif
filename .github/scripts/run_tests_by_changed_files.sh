#!/usr/bin/env bash
set -euo pipefail

CHANGED_RAW="${1:-}"

if [ -z "$CHANGED_RAW" ]; then
  echo "Nenhum arquivo alterado recebido. Saindo."
  exit 0
fi

# transforma em array (space-separated)
# cuidado com espaços em nomes de arquivo (raros): este exemplo assume que não há nomes com espaços
read -r -a files <<< "$CHANGED_RAW"

# flags de decisão
run_frontend=false
run_backend=false
run_python=false
run_integration=false

for f in "${files[@]}"; do
  echo "-> examinado: $f"
  if [[ "$f" == frontend/* || "$f" == *.html || "$f" == *.css || "$f" == package-lock.json && "$f" == frontend* ]]; then
    run_frontend=true
  fi

  if [[ "$f" == backend/* || "$f" == server/* || "$f" == *.js || "$f" == *.ts ]]; then
    run_backend=true
  fi

  if [[ "$f" == *.py || "$f" == scripts/python* ]]; then
    run_python=true
  fi

  # exemplo para testes de integração se arquivos docker/infra mudarem
  if [[ "$f" == docker/* || "$f" == infra/* ]]; then
    run_integration=true
  fi
done

# executar testes conforme as flags
if $run_frontend; then
  echo "Executando testes frontend..."
  if [ -d frontend ]; then
    cd fontes/frontend
    npm ci
    npm test -- --watchAll=false || { echo "Testes frontend falharam"; exit 1; }
    cd -
  else
    echo "Diretório frontend não encontrado — pulando."
  fi
fi

if $run_backend; then
  echo "Executando testes backend..."
  if [ -d backend ]; then
    cd fontes/backend
    npm ci
    npm test || { echo "Testes backend falharam"; exit 1; }
    cd -
  else
    echo "Diretório backend não encontrado — pulando."
  fi
fi

if $run_python; then
  echo "Executando pytest..."
  # presumindo ambiente python com dependências definidas em requirements.txt
  python -m pip install -r requirements.txt
  pytest -q || { echo "PyTest falhou"; exit 1; }
fi

if $run_integration; then
  echo "Executando testes de integração (exemplo)..."
  # rodar comando de integração, docker-compose etc
  # docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit
fi

# se nenhuma flag foi acionada, podemos falhar ou apenas informar
if ! $run_frontend && ! $run_backend && ! $run_python && ! $run_integration; then
  echo "Nenhum teste mapeado para os arquivos modificados. Nada a executar."
fi
