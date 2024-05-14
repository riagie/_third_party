export default () => ({
  application: {
    host: process.env.APP_URL || "127.0.0.1",
    port: parseInt(process.env.APP_PORT, 10) || 3000,
  },
  database: {
    adapter:
      process.env.DB_ADAPTER === "false"
        ? false
        : Boolean(process.env.DB_ADAPTER),
    type: process.env.DB_CONNECTION || "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});
