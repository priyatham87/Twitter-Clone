import epress from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteNotifications, getNotifications } from "../controllers/notificationController.js";
const router = epress.Router();

router.get('/',protectRoute,getNotifications);

router.delete('/',protectRoute,deleteNotifications);

export default router;