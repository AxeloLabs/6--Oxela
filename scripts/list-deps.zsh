#!/bin/zsh

echo "🔍 Collecting dependencies from package.json and peerDependencies..."

# 1. Collect direct dependencies
deps=("${(@f)$(jq -r '.dependencies, .devDependencies | keys[]' package.json | sort -u)}")

# 2. Init final list with top-level deps
all_deps=("${deps[@]}")

# 3. Scan node_modules for peerDependencies of each top-level dep
for dep in "${deps[@]}"; do
  pkg_path="node_modules/$dep/package.json"
  if [[ -f "$pkg_path" ]]; then
    peer_deps=("${(@f)$(jq -r '.peerDependencies | keys[]?' "$pkg_path")}")
    all_deps+=("${peer_deps[@]}")
  fi
done

# 4. Remove duplicates and sort
unique_sorted=("${(@u)all_deps}")
sorted=("${(@o)unique_sorted}")

# 5. Display
echo "\n📦 Total dependencies (including peers): ${#sorted[@]}"
for dep in "${sorted[@]}"; do
  echo "$dep"
done
