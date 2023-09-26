---
layout: "../layouts/BlogPost.astro"
title: "Next-gen IDEs"
publishDate: "1/29/2023"
published: true
---

[GitHub Copilot writes ~80% of Andrej Karpathy's code with ~80% accuracy.](https://twitter.com/karpathy/status/1608895189078380544). A reasonable hypothesis is that Copilot can make the best programmers 0.8 * 0.8 = 64% more productive.

- VS Code is an interface to text files. 
- Language servers
  - input: text files
  - output: ast, code highlighting, error underlines
- building interfaces on top of VS Code?
- take advantage of:
  - extensions (built-in language servers)
    - syntax highlighting
    - jupyter notebook
  - file search
  - command pallete
  - typescript language server, mass renames
- missing fundamental features
  - database views
    - airtable/sheets/tableplus/postico/prisma studio
- alternative interfaces
  - implementation will be based on text
    - json, yaml, source code. code is data
    - easy to sync (via text based CRDTs)
  - examples
    - notion/notes/obsidian
    - workflow builder (zapier)
    - ui builder (zapier, webflow)
    - form builders
