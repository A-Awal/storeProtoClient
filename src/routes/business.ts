import express from "express";
import { verifyAccount } from "../controllers/auth/verify_account";

import { requestPasswordReset, setNewPassword } from "../controllers/auth/password_reset";


export const businessRouter = express.Router();

businessRouter.post("/verify/:id/:token", verifyAccount);

businessRouter.post("/reset/:id/:token", setNewPassword);
