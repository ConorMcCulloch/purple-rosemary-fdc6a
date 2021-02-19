#!/usr/bin/env bash

set -e
set -o pipefail
set -v

echo "stackbit-build.sh: start build"

# build site
npm run build

./inject-stackbit-widget.js public https://widget.stackbit.com/init.js 602fdc6a421e330015483aa5

echo "stackbit-build.sh: finished build"
