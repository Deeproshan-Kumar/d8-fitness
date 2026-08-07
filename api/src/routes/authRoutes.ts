import { Router } from "express";
import { registerUser, loginUser, logoutUser, getCurrentUser, updateProfile, forgotPassword, resetPassword, changePassword } from "../controllers/authController";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/current-user', getCurrentUser);
router.put('/update-profile', updateProfile);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);
router.put('/change-password', changePassword);

export default router;