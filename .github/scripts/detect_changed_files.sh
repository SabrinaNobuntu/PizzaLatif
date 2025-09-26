#!/usr/bin/env bash
set -euo pipefail

# Arquivo que vai receber a lista de arquivos modificados
OUTPUT_FILE="${1:-changed_files.txt}"

echo "Detectando arquivos modificados..." >&2

# Pega arquivos modificados entre commits (se houver) e alterações não commitadas
git fetch origin main --depth=1 || true

# Lista arquivos adicionados ou modificados em relação ao origin/main
git diff --name-only origin/main HEAD > /tmp/committed_changes.txt || true

# Lista alterações não commitadas (untracked ou modificadas)
git ls-files --modified --others --exclude-standard > /tmp/uncommitted_changes.txt || true

# Combina tudo
cat /tmp/committed_changes.txt /tmp/uncommitted_changes.txt | sort | uniq > "$OUTPUT_FILE"

# Mostra resultado
if [ -s "$OUTPUT_FILE" ]; then
    echo "Arquivos alterados detectados:"
    cat "$OUTPUT_FILE"
else
    echo "Nenhum arquivo alterado detectado."
fi
