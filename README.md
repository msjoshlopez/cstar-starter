# cStar starter

A small custom help desk on the [cStar](https://www.cstar.help) SDK. List your tickets, read them, reply and resolve. It's yours to change: same tickets, your interface.

## Run it

You need Node 22 and a cStar team.

```bash
git clone https://github.com/msjoshlopez/cstar-starter.git
cd cstar-starter
npm install
cp .env.example .env
```

In cStar, go to **Settings > Team > API Keys**, make a test key, and put it and your team ID in `.env`. Then:

```bash
npm run dev
```

Open http://localhost:5173. A test key only sees your test data, so make a test ticket in cStar first.

## Where things are

| File | What it does |
| --- | --- |
| `src/lib/server/cstar.js` | The SDK client. It runs on the server, so your secret key stays there |
| `src/routes/+page.server.js` | Loads the tickets |
| `src/routes/tickets/[id]/+page.server.js` | Loads a ticket, sends a reply, resolves it |
| `src/env.js` | The settings this app reads |

There's no sign-in on this app. Anyone who can open it can read and answer your tickets, so add your own login before you put it on the internet.

## Deploy

It uses SvelteKit's automatic adapter, so Vercel, Netlify and Cloudflare work without changes. Set `CSTAR_SECRET_KEY` and `CSTAR_TEAM_ID` on the host.

## Next

- [JavaScript SDK docs](https://www.cstar.help/developers/sdk/js)
- [API reference](https://www.cstar.help/developers)

MIT licensed.
