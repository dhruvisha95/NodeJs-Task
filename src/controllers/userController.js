const { getUsers } = require('../services/userService');

async function Users(req, res) {
    try {
        const users = await getUsers();
        res.status(200).json({ message: "success", users: users });
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = Users;