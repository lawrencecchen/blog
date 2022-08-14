---
layout: "../../layouts/BlogPost.astro"
title: "tools to write more"
publishDate: "future"
---

inspiration is fleeting. writing is hard. i’m looking for tools that minimize the time from thought to "i can start typing and words appear on my screen". right now this is basically apple notes.

two primary metrics i want to optimize are 1) time to start typing and 2) time to publish on the internet

notion: O(11,000ms)
- opt + space (alfred) -> ch(romium) -> cmd + t -> no(tion.so) -> move cursor around -> finds tiny “+” in the left panel -> skip the title -> ⌨️

evernote: 

apple notes: O(3,500ms)
- opt + space (alfred) -> no(tes) -> cmd + n -> skip title -> ⌨️

twitter: O(6,000ms)
- opt + space (alfred) -> ch(romium) -> t(witter.com) -> find tweet button -> ⌨️

google docs: O(6,000ms)
- opt + space (alfred) -> ch(romium) -> docs.new -> ⌨️
- this one surprised me. google docs just has a clunky slow feeling, i guess i have fast wifi. also discovered notion.new while i was doing this, might go back and update notion’s scores later

replit O(70,000ms):
- it took 70 seconds to completely set up a ghost blog from scratch using replit. took a while for replit to download ghost packages (probably hit a cold nix cache), but replit is probablly the fastest way to get a fully-fledge email list/blog hybrid and start getting subscribers and $$$.
- i’ll set up an eleventy blog later. will report back.
- just kidding. went with astro (https://twitter.com/lawrencecchen/status/1558402437555245056) and hopefully won't regret it

<hr />

why did i write this up? i want to make a note taking app that replaces apple notes. i want something simple that launches fast (like apple notes). i also want multiplayer (google docs), and it should sync to indexeddb, a git repo, and a sqlite database. it should also be default live. i want my notes to be published on my personal blog as a type.

stuff i’m considering to use (from most likely to least): 
- yjs
- isomorphic-git
- lightning-fs
- sqlite
- solidjs
- preact
- tauri

i anticipate a lot of yak-shaving along the way:
- creating a hosted yjs service on cloudflare durable objects
- improve typescript support for yjs (implement the liveblocks api in yjs)
    - first class preact/react/js framework bindings for yjs
    - hocuspocus has been in dev since forever

## the texting medium of writing

- stream of thought consciousness is great for getting your words down
- you must get your words down for them to matter (and to think as a whole)
- how to stop yourself from editing when writing?
- how to stop yourself from fretting when thinking?
- editing is a distraction (while thinking)

hypothesis: writers will have more output if the medium of their writing is texting

- once you press send, there's (probably) no going back
- seeing chat bubbles will make you talk like a human <-> write like a human <-> think like a human
  - perhaps empathize with the other side (but this is a bit of a stretch...)