export default () => ({
  APPLICATION: {
    HOST: process.env.APP_URL || "127.0.0.1",
    PORT: parseInt(process.env.APP_PORT, 10) || 3000,
  },
  DATABASE: {
    ADAPTER:
      process.env.DB_ADAPTER === "false"
        ? false
        : Boolean(process.env.DB_ADAPTER),
    TYPE: process.env.DB_CONNECTION || "mysql",
    HOST: process.env.DB_HOST,
    PORT: parseInt(process.env.DB_PORT, 10) || 3306,
    DATABASE: process.env.DB_DATABASE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
  },
  SECRETKEY: process.env.JWT_SECRET || "1a492d91cf483cf1130784c885e099e7",
  EXPIRE_IN: process.env.JWT_EXPIRES || 30,
});
