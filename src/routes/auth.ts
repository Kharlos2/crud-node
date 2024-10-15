import { Router, Request, Response } from "express";
import { registerCtrl, loginCtrl} from "../controllers/auth"

const router = Router();

/** hhtp://localhost3002/auth/register [POST] */

router.post('/register', registerCtrl);
router.post("/login", loginCtrl)

export { router };