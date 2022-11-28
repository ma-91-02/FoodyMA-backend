import { Router } from "express";
import { getHome } from "../controllers/mobile";
const router = Router();

router.get("/", getHome);

export default router;
