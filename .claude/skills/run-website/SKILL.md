---
name: run-website
description: Use when asked to start, run, serve, preview, or launch the LWK informational website locally (the Next.js dev server) and confirm it's up.
---

# Run the LWK Website Locally

## Overview

This is a **Next.js 16 (Turbopack)** app. The local dev server is started with `npm run dev`.
Only one dev instance can run at a time — it holds a lock at `.next/dev/lock`.

## Steps

1. **Check it isn't already running** (a second `next dev` will fail to acquire the lock):
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000
   ```
   `200` → it's already up at http://localhost:3000; stop here and tell the user.

2. **Ensure dependencies exist** (only if `node_modules` is missing):
   ```bash
   test -d node_modules || npm install
   ```

3. **Start the dev server** in the background:
   ```bash
   npm run dev
   ```

4. **Confirm it's serving.** Wait a few seconds, then read the server output for the
   `- Local: http://localhost:<port>` line and verify:
   ```bash
   curl -s http://localhost:3000 | grep -o '<title>[^<]*</title>'
   ```
   Expect: `<title>LWK Partners | Real Estate Private Equity</title>`.

## Notes

- **Port:** defaults to `3000`. If `3000` is taken, Next.js auto-selects the next free
  port (e.g. `3001`) — read the startup output for the actual URL.
- **Lockfile warning:** Next.js may warn about multiple lockfiles (one at
  `/Users/dimitri/package-lock.json`). This is informational and does not affect the
  dev server.
- **"Unable to acquire lock" error:** another `next dev` is already running. Use the
  existing instance instead of starting a new one.

## Other commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Serve production build | `npm run start` |
| Lint | `npm run lint` |
