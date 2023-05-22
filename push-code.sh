#!/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'ci: deploy'

git push -f https://github.com/Eadela/ci.git master:master

cd -