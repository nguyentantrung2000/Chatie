const app = require('express');
const ConversationModel = require('../../models/conversation.model');
const Database = require('../database');

const router = app.Router();


router.put("/addfriend", async (req, res) => {
    const { id, friendListRequest , accept } = req.body;
    try {
        let addfriend = await Database.instance.User.addFriend(id, friendListRequest,accept);
        res.send({ message: addfriend });
    } catch (erro) {
        res.status(400).send({ message: `Cannot add` });
    }
});

<<<<<<< HEAD
router.put("/addfriendrequest", async (req, res) => {
    const {userName, id, friendName } = req.body;
=======
router.post("/addfriendrequest", async (req, res) => {
    const { id, friendId } = req.body;
>>>>>>> bd8b55a9375e3fe30bd83d43c6869f09e50f5529
    try {
        let sendFriendRequest = await Database.instance.User.addFriendRequest(userName, id, friendName);
        res.send({ message: sendFriendRequest });
    } catch (erro) {
        res.status(400).send({ message: `Cannot add` });
    }
});

<<<<<<< HEAD

router.put("/delete", async (req, res) => {
=======
router.delete("/", async (req, res) => {
>>>>>>> bd8b55a9375e3fe30bd83d43c6869f09e50f5529
    const { id, friendId } = req.body;
    try {
        let Deletefriend = await Database.instance.DeleteFriend(id, friendId);
        res.send({ message: Deletefriend });
    } catch (erro) {
        res.status(400).send({ message: `Cannot delete` });
    }
});



module.exports = router;