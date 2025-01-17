import { NextFunction, Request, Response } from 'express';
const logmiddleware = (req:Request, res:Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"]
    console.log("user-agent: ", userAgent)
    next();
};

export { logmiddleware };