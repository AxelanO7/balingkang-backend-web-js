import express from "express";
import {
    getAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin,
} from "../controllers/AdminController.js";

import {
    getBuildings,
    getBuildingById,
    createBuilding,
    updateBuilding,
    deleteBuilding,
} from "../controllers/BuildingController.js";

const router = express.Router();

// admin
router.get("/admin", getAdmins);
router.get("/admin/:id", getAdminById);
router.post("/admin", createAdmin);
router.post("/admin/login", loginAdmin);
router.patch("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

// building
router.get("/building", getBuildings);
router.get("/building/:id", getBuildingById);
router.post("/building", createBuilding);
router.patch("/building/:id", updateBuilding);
router.delete("/building/:id", deleteBuilding);

export default router;
