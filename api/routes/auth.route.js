import express from 'express';
import { signup } from '../controllers/auth.controller.js';
//google, signOut, signin, 
const router = express.Router();

router.post("/signup", signup);
// router.post("/signin", signin);
// router.post('/google', google);
// router.get('/signout', signOut)

 export default router;