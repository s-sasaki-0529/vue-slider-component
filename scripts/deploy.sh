#!/usr/bin/env sh

set -e

pnpm build
# npm version patch
# git push origin [tag]
npm publish
