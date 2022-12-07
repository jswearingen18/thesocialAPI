const router = require("express").Router();
const {
  createThoughts,
  deleteThoughts,
} = require("../../controllers/thoughtsController");
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser);

router.route("/:userId/thoughts").post(createThoughts);

router.route("/:userId/thoughts/:thoughtsId").delete(deleteThoughts);

module.exports = router;
