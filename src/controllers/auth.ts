import { Request, Response } from 'express';
import { registerNewUser, loginUser } from '../service/auth.service';

const registerCtrl = async ({body}:Request, res:Response) =>{
    const responseUser = await registerNewUser(body);
}
const loginCtrl = async (req:Request, res:Response) =>{}

export {loginCtrl, registerCtrl}