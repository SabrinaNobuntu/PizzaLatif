#!/usr/bin/env bash
set -euo pipefail

BASE="${1:-}"
HEAD="${2:-}"

if [ -z "$BASE" ] || [ -z "$HEAD" ]; then
  echo "Usage: $0 <base_sha> <head_sha>" >&2
  exit 2
fi

git fetch --no-tags --prune --depth=50 origin || true

if [[ "$BASE" =~ ^0+$ ]]; then
  git ls-tree -r --name-only "$HEAD"
  exit 0
fi

git diff --name-status "$BASE" "$HEAD" | awk '$1 == "A" || $1 == "M" { print $2 }'
