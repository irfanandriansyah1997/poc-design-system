#!/bin/bash

if ! type "pnpm" > /dev/null; then
  npm install -g pnpm@^9.5.0
fi

pnpm install
pnpm prepare