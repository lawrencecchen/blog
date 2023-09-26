---
layout: "../layouts/BlogPost.astro"
title: "Realtime application holotypes"
publishDate: "1/23/2023"
---

maybe this should be called multiplayer application holotypes

links:
- jason miller application holotypes: https://jasonformat.com/application-holotypes/
- theo's picture: https://twitter.com/t3dotgg/status/1548106285291229184
- tkdodo websockets with react-query: https://tkdodo.eu/blog/using-web-sockets-with-react-query


## the holotypes

- live stateless events
  - notification systems
  - twitch live chat (ephemeral)
- messenger/whattsapp/youtube chat (stateful)
- collaborative interaction
  - crdts (yjs) or custom OT
    - usually has awareness/presence
  - google docs/replit (text editing)
  - figma
  - webflow (their implementation uses ably and it really sucks (no concurrent editors))
  - providers
    - yjs
    - liveblocks
- linear/asana
  - db sync
  - providers
    - replicache
    - convex
    - supabase
    - firestore

- fps/valorant/etc
  - custom server probably in c++ or some faster-than-javascript language