---
layout: "../layouts/BlogPost.astro"
title: "The Service Worker Web Framework"
publishDate: "future"
published: false
---

Frameworks today are node dependent. This makes it hard for no-code editors to be built on existing frameworks. Instead, no-code services typically use JSON as the primitive data structure, as seen in Webflow, Notion, Plasmic (i'm not 100% sure), Retool (also not 100% sure), and likely many others.

When JSON is used as the primitive data structure, a completely new "programming languages" is implicitly created. While it's easier to parse JSON objects in the language of the web, a framework is inevitably created to convert JSON objects into JavaScript components. Essentially, you'd have to write an AST parser.

Some projects choose JSON as purely for convenience. Others, such as Mitosis or Plasmic, choose JSON for interoperability. Having a statically analyzable object can be powerful. For example, [Mitsosis](https://github.com/BuilderIO/mitosis) can translate between a single AST and every UI framework. Their 

<hr />

The Figma experience is primarily characterized by multiplayer and super low input latency. I think it's possible to recreate the Figma experience in a no-code web framework.

There will be two modes of input:

1. freeform canvas (basically figma, similar to retool's grid form)
2. html layout flow (flex, grid, block, etc ([normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)))

It's quicker and more intuitive to create in the first mode. However, the first mode is implemented via absolute positioning and will not translate well to different viewport sizes. It's great for quick prototyping and for non-external tools (aka retool), but doesn't work for public facing apps. It's not accessible, and it doesn't look good. 

Plasmic uses html layout flow and forces the user to author a screen for every viewport size. This isn't ideal.

<hr />

Web frameworks are composed of these primitives:

1. bundler (babel esbuild, swc, (includes meta bundlers like vite, webpack)). includes asset serving
2. router
3. styles (tailwind, css-in-js, css modules)
4. 

There are three parts to most modern web frameworks.
- ui library?
1. dev server (hmr, live reload)
2. css (tailwind)
3. data loading abstractions (loader functions, getStaticProps, useQuery, etc)

There are several approaches to making a code first no-code web framework.

1. re-implement webcontainers (enough node shims to make node frameworks run)

Making a new framework is also an excuse to build a tanstack native framework. All the primitives (react-location, react-query, etc.) are in place

## Next.js Live is not Live

There's an option to 

Next.js enable teams to collaboratively comment on code. You can't collaboratively create, edit code, and then instantly see your changes -- the only way to see your edits live is to see 

https://vercel.com/live

## links

- https://en.wikipedia.org/wiki/Greenspun%27s_tenth_rule
- next.js live