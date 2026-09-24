#!/bin/sh
# Rebuild the download archive from the plugin build (read-only on the plugin repo).
# Usage: npm run zip   (override the source with COMPONENT=/path/to/Freeze.component)
set -eu

COMPONENT="${COMPONENT:-../freeze/build/Freeze.component}"
OUT="public/downloads/FreezeAudio-1.0.0-macOS.zip"

codesign --verify --strict "$COMPONENT"
mkdir -p "$(dirname "$OUT")"
rm -f "$OUT"
# --noextattr: skip local xattrs (com.apple.provenance) that would add ._* AppleDouble files
ditto -c -k --norsrc --noextattr --noacl --keepParent "$COMPONENT" "$OUT"
echo "OK: $OUT"
shasum -a 256 "$OUT"
