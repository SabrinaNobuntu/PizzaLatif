#!/usr/bin/env bash
set -euo pipefail

BASE="${1:-}"
HEAD="${2:-}"

if [ -z "$BASE" ] || [ -z "$HEAD" ]; then
  echo "Usage: $0 <base_sha> <head_sha>" >&2
  exit 2
fi

# fetch mínimo para ter os commits (actions/checkout com fetch-depth:0 geralmente já é suficiente)
git fetch --no-tags --prune --depth=50 origin || true

# se BASE for todo zeros (ex: inicial), listamos todo o conteúdo do HEAD
if [[ "$BASE" =~ ^0+$ ]]; then
  git ls-tree -r --name-only "$HEAD"
  exit 0
fi

# Usamos name-status para pegar o status (A-adicionado, M-modificado, D-deletado, R/ C renomeado)
# Filtramos A e M (added/modified)
git diff --name-status "$BASE" "$HEAD" \
  | awk '$1 == "A" || $1 == "M" { print $2 }'
