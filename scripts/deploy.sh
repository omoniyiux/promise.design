#!/bin/bash
# Safe deploy: refuses to publish if any deck asset is missing, then checks the live site.
set -e
cd "$(dirname "$0")/.."
python3 scripts/check-decks.py || { echo "Stopped: fix the missing files above before deploying."; exit 1; }
URL=$(vercel --prod --yes 2>/dev/null | grep -o 'https://omoniyiux-[a-z0-9]*-olaifapromise1-gmailcoms-projects.vercel.app' | tail -1)
[ -n "$URL" ] || { echo "Deploy failed"; exit 1; }
vercel alias set "$URL" omoniyiux.vercel.app
sleep 5
python3 scripts/check-decks.py --live
