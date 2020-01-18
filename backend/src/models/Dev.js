const { Schema, model } = require("mongoose");
const PointSchema = require("./utils/Point");

const DevSchema = Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere"
  }
});

module.exports = model("Dev", DevSchema);
