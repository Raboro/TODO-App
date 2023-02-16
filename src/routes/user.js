import express from 'express';
import {addUser, logInUser, logoutUser} from "../controllers/user.js";
const router = express.Router();

router.get("/", (req, res) => {
    return logInUser(req, res);
})

router.post("/", (req, res) => {
    return addUser(req, res);
})

router.get("/logout", (req, res) => {
    return logoutUser(req, res);
})

export default router;