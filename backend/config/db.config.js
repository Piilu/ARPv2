module.exports = {
    HOST: "192.168.1.139",
    USER: "data",
    PASSWORD: "teretere",
    DB: "arp",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };