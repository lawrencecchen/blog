---
layout: "../layouts/BlogPost.astro"
title: "Language runtimes"
publishDate: "1/29/2023"
published: true
---

The best self-provisioning runtimes today all run Python. Most take advantage of the function decorator syntax.


## Services

- [Modal](https://modal.com/)
- [Ray Serve](https://docs.ray.io/en/latest/serve/index.html)
- [Nitric](https://nitric.io/)
- [Encore.dev](https://encore.dev)

## Code samples

### Web APIs

#### Modal

https://modal.com/docs/guide/webhooks

```python
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

import modal

web_app = FastAPI()
stub = modal.Stub()

image = modal.Image.debian_slim().pip_install("boto3")

@web_app.post("/foo")
async def foo(request: Request):
    body = await request.json()
    return body


@web_app.get("/bar")
async def bar(arg="world"):
    return HTMLResponse(f"<h1>Hello Fast {arg}!"</h1>")


@stub.asgi(image=image)
def fastapi_app():
    return web_app
```

#### Nitric

https://nitric.io/

```ts
import { api } from '@nitric/sdk';

const helloApi = api('main');

helloApi.get('/hello/:name', async (ctx) => {
    const { name } = ctx.req.params;
    ctx.res.body = `Hello ${name}`;
});
```

### Cron jobs

#### Modal

```python
# runs at 8 am (UTC) every Monday
@stub.function(schedule=modal.Cron("0 8 * * 1"))
def cron_job():
    ...
```

#### Nitric (JavaScript)

https://nitric.io/docs/schedules?lang=javascript

```ts
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 5 minutes
schedule('process-transactions').every('5 minutes', async (ctx) => {
  // do some processing
});

// Create a schedule that runs every 3 hours
schedule('send-reminder').every('3 hours', async (ctx) => {
  // do some processing
});

// We can also just provide a simple singular rate as well
schedule('send-reports').every('day', async (ctx) => {
  // do some processing
});
```

#### Nitric (Python)

https://nitric.io/docs/schedules?lang=python

```python
from nitric.resources import schedule

# Create a schedule that runs every 5 minutes
@schedule("process-transactions", every="5 minutes")
async def process_transactions(ctx):
    pass

# Create a schedule that runs every 3 hours
@schedule("send-reminder", every="3 hours")
async def send_reminder(ctx):
    pass

# We can also just provide a simple singular rate as well
@schedule("send-reports", every="day")
async def send_reports(ctx):
    pass
```

#### Encore

https://encore.dev/docs/primitives/cron-jobs

```go
import "encore.dev/cron"

// Send a welcome email to everyone who signed up in the last two hours.
var _ = cron.NewJob("welcome-email", cron.JobConfig{
	Title:    "Send welcome emails",
	Every:    2 * cron.Hour,
	Endpoint: SendWelcomeEmail,
})

// SendWelcomeEmail emails everyone who signed up recently.
// It's idempotent: it only sends a welcome email to each person once.
//encore:api private
func SendWelcomeEmail(ctx context.Context) error {
	// ...
	return nil
}
```

### Scale

#### Ray

https://docs.ray.io/en/latest/ray-core/tasks/using-ray-with-gpus.html

https://docs.ray.io/en/latest/ray-core/scheduling/memory-management.html

```python
@ray.remote(num_cpus=10, num_gpus=2, memory=500 * 1024 * 1024)
class Actor:
    pass
```

#### Modal

https://modal.com/docs/guide/gpu

https://modal.com/docs/guide/memory

https://modal.com/docs/guide/cpu

```python
import modal

stub = modal.Stub()

@stub.function(cpu=2.0, memory=2048, gpu="A100")
def my_function():
    ...
```

## links

- https://www.swyx.io/self-provisioning-runtime
