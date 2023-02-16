import express from 'express';
import {addUser, signInUser, logoutUser} from "../controllers/user.js";
const router = express.Router();

router.post("/signin", (req, res) => {
    return signInUser(req, res);
})

router.post("/signup", (req, res) => {
    return addUser(req, res);
})

router.get("/logout", (req, res) => {
    return logoutUser(req, res);
})

export default router;