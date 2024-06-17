#!/bin/bash

if ! type "pnpm" > /dev/null; then
  npm install -g pnpm@^9.3
fi

pnpm install
pnpm prepare