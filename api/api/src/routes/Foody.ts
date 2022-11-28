import { Router } from "express";
import { getHome } from "../controllers/Foody";

const router = Router();
router.get("/", getHome);
export default router;
