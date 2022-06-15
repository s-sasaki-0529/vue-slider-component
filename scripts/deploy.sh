#!/usr/bin/env sh

set -e

yarn build
# npm version patch
# git push origin [tag]
npm publish
