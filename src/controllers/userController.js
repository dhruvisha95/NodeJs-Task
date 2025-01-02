const getUsers = require('../services/userService');  

async function Users(req,res){
    const users = await getUsers() ;
    res.json({users:users});
}

module.exports = Users;