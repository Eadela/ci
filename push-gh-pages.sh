#!/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'ci: deploy'

git push -f git@github.com:Eadela/ci.git master:gh-pages

