import getUsers from "../services/userService";

export async function getUsers(req,res){
    const users = getUsers();
    return users;
}