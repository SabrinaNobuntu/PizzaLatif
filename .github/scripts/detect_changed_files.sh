#!/usr/bin/env bash
set -euo pipefail

BASE="${1:-}"
HEAD="${2:-}"

if [ -z "$BASE" ] || [ -z "$HEAD" ]; then
  echo "Usage: $0 <base_sha> <head_sha>" >&2
  exit 2
fi

echo "Detectando arquivos modificados entre $BASE e $HEAD..." >&2
git fetch --no-tags --prune --depth=50 origin || true

# branch inicial ou sem histórico
if [[ "$BASE" =~ ^0+$ ]]; then
  git ls-tree -r --name-only "$HEAD"
  exit 0
fi

# arquivos adicionados ou modificados
git diff --name-status "$BASE" "$HEAD" | awk '$1 == "A" || $1 == "M" { print $2 }'
