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
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

router.route("/:userId/thoughts").post(createThoughts);

router.route("/:userId/thoughts/:thoughtsId").delete(deleteThoughts);

router.route("/:userId/friends").post(addFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend)

module.exports = router;
