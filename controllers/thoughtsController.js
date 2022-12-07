const { Thoughts, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtsId })
      .select("-__v")
      .then((thoughts) =>
        !thoughts
          ? res
              .status(404)
              .json({ message: "No thoughts were found try a different Id!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteThoughts(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtsId })
      .then((thoughts) =>
        !thoughts
          ? res
              .status(404)
              .json({ message: "No thoughts were found try a different Id!" })
          : User.deleteMany({ _id: { $in: thoughts.users } })
      )
      .then(() =>
        res.json({ message: "The User and their Thoughts were deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },

  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtsId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res
              .status(404)
              .json({ message: "No thoughts were found try a different Id!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
};
