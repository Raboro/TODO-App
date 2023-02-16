import express from 'express';
import {getUser} from "../controllers/user.js";
const router = express.Router();

router.get("/", (req, res) => {
    return getUser(req);
})

router.post("/", (req, res) => {
    return addUser(req);
})

export default router;