const { connect, connection } = require("mongoose");

connect("mongodb://localhost/friendCountVirtual", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
