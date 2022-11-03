const config = {
  api_url: process.env.API_URL,
  postgres: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
}

export default config;