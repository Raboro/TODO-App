import express from 'express';
import {addUser, signInUser, logoutUser} from "../controllers/user.js";
const router = express.Router();

router.post("/signin", async (req, res) => {
    await signInUser(req, res);
})

router.post("/signup", async (req, res) => {
    await addUser(req, res);
})

router.get("/logout", async (req, res) => {
    await logoutUser(req, res);
})

export default router;