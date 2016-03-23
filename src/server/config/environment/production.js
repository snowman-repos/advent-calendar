// These will be used only in production environments where
// NODE_ENV=production

module.exports = {
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || void 0,
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080,
  mongo: {
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || "mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/"
  }
};