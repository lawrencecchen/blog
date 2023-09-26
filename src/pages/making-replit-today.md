---
layout: "../layouts/BlogPost.astro"
title: "Making Replit today + predicting future Replit"
publishDate: "9/21/2023"
published: true
---

Originally published on 1/29/23, but republished again with updates + new ideas. Holy heck their team ships fast.

- as time passes, technology becomes easier to make
- scale is easy
- innovator's dilemma
- problems that replit solves
  - UI (easy)
  - code editor/language servers in browser (but it's kinda slow)
  - networking, anycast (hard)
  - fast booting containers (hard)
  - persistent containers (hard)
  - package management (medium)
  - collaborative text editing (hard)
  - mobile (medium)
  - databases (easy)
  - gpus (hard)
  - copilot/AI integration (medium)
- things I didn't anticipate
  - AI primitives (openai api built into every repl environment (but it's google))
- why is replit easier to create today (some reasons are due to open source projects that owe their success from replit)
  - containers/networking/multi-region scale is trivial thanks to [fly machines](https://fly.io/docs/machines/working-with-machines/#networking)
    - ok, so replit has released code-exec and agent-env, which may turn out to be a better version of fly machines
    - so technically replit itself provides a primitive to make it easier to build "replit"... which isn't that useful if you're trying to compete lol
  - nix
  - yjs
    - cloudflare durable objects
    - partykit
    - [liveblocks yjs](https://liveblocks.io/document/yjs)
  - codemirror 6
  - neon
  - openai
- a better replit (problems that replit still hasn't solved)
  - vercel grade CI/CD
  - ~~more disk storage~~
  - multi-region scale
  - ~~autoscale~~
  - vscode parity
  - dev/staging/prod environments
    - ~~build step (node frameworks) (typescript)~~ deployments!
    - ~~a databases for each branch (planetscale/neondb/d1)~~ technically not for each branch yet, but yknow
  - framework integration
    - nextjs
    - [build output api](https://vercel.com/docs/build-output-api/v3)
  - primitives beyond cpu/memory/ram
    - s3 blob storage
    - cron jobs
    - pub/sub
    - message queues
    - see [language runtimes](/language-runtimes)
    - gpus (not fully released yet...)
  - cdn
    - cloudflare, fastly
    - image optimization
    - edge
  - see [next-gen IDEs](/next-gen-ides)
  - vercel v0
    - imagine this but mobile
  - app store
    - currently, online app store exists
    - but with eu regulation apple and google might have to allow third party iOS app stores...
    - and guess who is primed to take advantage of that?!?
    - could start with mobile apps, but edge more into native from there...
      - oh hullo expo! 😏
