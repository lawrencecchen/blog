---
layout: "../layouts/BlogPost.astro"
title: "Yet another ORM"
publishDate: "1/29/2023"
---

## 1/29/2023 updates

Compile to Prisma to get lots of free stuff (schema migrations for popular SQL databases) under the hood. Then, TypeScript infer a Kysely client for better portability (and running on edge runtimes). We can likely replicate a significant portion of Prisma's API on top of Kysely.

API I'm leaning towards:

```ts
import { zodma, table } from 'zodma';
import { z } from 'zod'

// Example DDL for next-auth
const { db } = zodma
  .config({
    databaseUrl: "postgres://localhost:5432",
  })
  .tables({
    account: table
      .columns({
        id: z.string().uuid().primaryKey(),
        userId: z.string().unique(),
        type: z.string(),
        provider: z.string(),
        providerAccountId: z.string(),
        refresh_token: z.string().optional(),
        access_token: z.string().optional(),
        expires_at: z.number().optional(),
        token_type: z.string().optional(),
        scope: z.string().optional(),
        id_token: z.string().optional(),
        session_state: z.string().optional(),
      })
      .unique(["provider", "providerAccountId"]),
    session: table.columns({
      id: z.string().uuid().primaryKey(),
      sessionToken: z.string().unique(),
      userId: z.string(),
      expires: z.string(),
    }),
    user: table.columns({
      id: z.string().uuid().primaryKey(),
      name: z.string(),
      email: z.string().optional().unique(),
      emailVerified: z.date().optional(),
      image: z.string().optional(),
    }),
    verificationToken: table
      .columns({
        identifier: z.string(),
        token: z.string().unique(),
        expires: z.date(),
      })
      .unique(["identifier", "token"]),
  });

// querying with db (kysely wrapper)
db.selectFrom("user").where("id", "=", "213").execute()

// schema validation (zod)
const unsafeAccount = ...
const account = db.account.parse(unsafeAccount)
```

## why

Prisma has a pretty good developer experience. But behind the scenes, you've wrestled with monorepos, generated a thicc prisma client, and learned a custom dsl. Eventually, you'll find out that your vercel deployments have mind-numbingly slow cold starts since you don't have any users.

I think I can make a better ORM with these goals in mind.

## goals

- use zod for schema declaration.
  - no prisma generate
  - no `.prisma` ddl to learn (while zod could be considered a ddl, it has 1-to-1 mapping with typescript types, and is much more expressive (json schemas))
  - json schema validation
  - database schema is always in sync with typescript language server. no more restarting typescript language server
- good switch off story
  - easy to switch underlying database (pg, mysql)
    - you get to use planetscale/cockroachdb/lots of other newsql providers
  - database schema is defined in zod; types will be inferred, and easily used from other ORMs.
    - no prisma generate
- lightweight (don't generate a heavy rust client)
  - first class support for edge environments
  - a lightweight data proxy
- can wrap fetch wrappers such as:
  - support for cloudflare d1 when it comes out
  - postgrest/supabase https://postgrest.org/en/stable/, https://github.com/supabase/supabase-js
  - planetscale https://github.com/planetscale/database-js
- good monorepo support

## how to improve prisma

- typescript as ddl (zod). don’t need to learn a new query language, don’t need to create a custom language server
- prisma sucks for multiple schemas
- uses kysely as ORM. very lightweight, support for edge environments
    - type safety + flexibility
    - trivial to add cloudflare d1 sqlite when it comes out
    - also deno is a thing!
    - flexible backend
- you don’t have to restart typescript language server after every schema change;
    - inference is more powerful than code generation

## improvements on edgedb

edgedb is more feature-rich than prisma (eg. you can declare views, functions, CTEs, and a lot more using EdgeQL), but this means that edgedb's implementation depends heavily on postgres.

Colin, the creator of Zod (who now works at edgedb) has briefly explored this idea:

- https://github.com/colinhacks/zod/issues/53#issuecomment-669586200
- https://twitter.com/colinhacks/status/1344007284033114118

His main critique is that [Zod is not expressive enough](https://twitter.com/colinhacks/status/1551712322334248960), but I think that you could make something that is competitive with Prisma using Zod's API along with Kysely's TypeScript magic.

Regardless, EdgeDB lack's Prisma's switch off story. Choosing EdgeDB means that you're hard-locked in to Postgres. This fact alone makes me think that there's room for another ORM that provides the flexibility that Prisma affords you while having better design throughout. 

Prisma gave us a taste of seamless TypeScript DX, but it brought with it a baggage of poor design and questionable workarounds. EdgeQL teases the future of type-safe SQL, but by reinventing the database, can't play well with all existing databases(looking at you mysql/planetscale).

## hypothetical syntax

```ts
export const schema = l.schema({
  public: 
})

export const db = createClient<typeof schema>()
```

similar to convex's schema definition

```ts
import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  channels: defineTable({
    name: s.string(),
  }),
  messages: defineTable({
    author: s.string(),
    body: s.string(),
    channel: s.id("channels"),
  }),
});
```

- side note: typescript-first yjs + hosted durable objects backend would be a killer startup right about now...