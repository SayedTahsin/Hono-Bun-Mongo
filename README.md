# Routine App

Build with Hono.js framework on Bun Runtime Environment. Used MongoDb Database.
Used node-cron for Task scheduling.

 <a href="https://github.com/SayedTahsin/Routine-Hono">Same project build with Hono.js on Cloudflare-Workers Enviromnet & Used D1 Datasbe, FirebaseAuth</a>
 <br>
 <a href="https://github.com/SayedTahsin/Express-Mongo-Supabase">Same project build with Express.js & used MongoDb and Supabase Database</a>


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
