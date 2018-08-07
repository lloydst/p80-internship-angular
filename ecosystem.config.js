// used by pm2
module.exports = {
    apps : [{
      name: "app",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }