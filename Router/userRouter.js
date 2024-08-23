import express from "express";
import {addNewAdmin , getUserDetails, login, logoutAdmin, userRegister, userLogout} from "../controller/userController.js";
import {
    isAdminAuthenticated,
    isUserAuthenticated,
  } from "../middlewares/auth.js";

const router = express.Router();

router.post("/user/register", userRegister)
router.post("/login", login)
router.post("/admin/addNew",isAdminAuthenticated, addNewAdmin )
router.get("/admin/me", isAdminAuthenticated, getUserDetails)
router.get("/user/me",isUserAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/user/logout", isUserAuthenticated, userLogout);
// router.get("user/users",getAllUsers);
export default router;