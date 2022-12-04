const { Schema, model } = require("mongoose");

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual("reactionCount").get(function () {
  return `${this.reactions}`;
});

const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;
