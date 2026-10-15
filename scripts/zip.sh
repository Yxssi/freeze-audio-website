#!/bin/sh
set -eu

COMPONENT="${COMPONENT:-../freeze/build/Freeze.component}"
OUT="public/downloads/FreezeAudio-1.0.0-macOS.zip"

codesign --verify --strict "$COMPONENT"
mkdir -p "$(dirname "$OUT")"
rm -f "$OUT"
ditto -c -k --norsrc --noextattr --noacl --keepParent "$COMPONENT" "$OUT"
echo "OK: $OUT"
shasum -a 256 "$OUT"
