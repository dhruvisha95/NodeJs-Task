// import { users } from "@custom-types/db";
import { prisma } from "../configs/db";

export async function getUsers(){
    const users = await prisma.user.findMany();
    res.json(users);
}
