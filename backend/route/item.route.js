import { getItems } from "../controller/item.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getItems);

export default router;