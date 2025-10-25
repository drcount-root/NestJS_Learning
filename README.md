[NestJS video 1](https://www.youtube.com/watch?v=KMg_Qg0WCds) - 38:10mins/3hrs

To generate module:
`nest g module module-name`

To generate controller:
`nest g controller controller-name`

To generate service:
`nest g service service-name`

To generate rating service inside auth module services folder:
`nest g service rating auth/services`

Help:
`nest --help`

To run the app:
`pnpm run start:dev`

---

### Flow

User(view) => Middleware => Routes => Controller => Service => DB

Middlewares, Routes, Controller, Services all are part of each modules.
