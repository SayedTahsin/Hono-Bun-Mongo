# Routine App

Build with Hono.js framework on Bun Runtime Environment. Used MongoDb Database.
Used node-cron for Task scheduling.

Run Locally :

- clone repo

```bash
$ git clone git@github.com:SayedTahsin/Routine-Backend-Hono.git
```

- make .env file

```sh
MONGO_URL=
JWT_SECRET=
NODE_ENV=development
PORT=
```

```sh
bun i
bun run dev
```

open http://localhost:3000

- [x] Connect Mongo DB
- [x] Task: Route, Controller
- [x] Note: Route, Controller
- [x] User: Route, Controller
- [x] cronjobs
- [x] JWT setup
- [x] Check Login : Middleware
- [ ] Make it Clourflare Deploy Friendly.
