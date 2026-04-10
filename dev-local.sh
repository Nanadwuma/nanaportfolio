#!/bin/sh

# Uses the local Node runtime bundled in .local for this project.
export PATH="$(pwd)/.local/node-v24.14.1-darwin-arm64/bin:$PATH"
npm run dev
