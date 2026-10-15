#!/bin/sh
set -eu

VERSION="$(sed -n "s/^const version = '\(.*\)';$/\1/p" src/site.ts)"
DIST="${DIST:-../freeze/dist}"
OUT="public/downloads"

mkdir -p "$OUT"
for name in \
  "FreezeAudio-$VERSION-macOS.pkg" \
  "FreezeAudio-$VERSION-macOS.zip" \
  "FreezeAudio-$VERSION-Windows-Setup.exe" \
  "FreezeAudio-$VERSION-Windows.zip"
do
  cp "$DIST/$name" "$OUT/$name"
  shasum -a 256 "$OUT/$name"
done
echo "OK: $OUT"
