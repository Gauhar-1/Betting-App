"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.post('/send-otp', authController_1.sendOtp);
router.post('/verify-otp', authController_1.verifyOtp);
exports.default = router;
