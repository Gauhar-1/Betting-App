"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.router = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const moneyController_1 = require("../controllers/moneyController");
const notifyController_1 = require("../controllers/notifyController");
const ProfileManager_1 = require("../controllers/ProfileManager");
const battleManger_1 = require("../controllers/battleManger");
const app_1 = require("../app");
Object.defineProperty(exports, "io", { enumerable: true, get: function () { return app_1.io; } });
const multerService_1 = require("../utils/multerService");
const stateManager_1 = require("../controllers/stateManager");
const router = (0, express_1.Router)();
exports.router = router;
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
router.post('/send-otp', authController_1.sendOtp);
router.post('/verify-otp', authController_1.verifyOtp);
router.post('/deposit', multerService_1.upload.single('image'), moneyController_1.depositAmount);
router.post('/withdraw', moneyController_1.withdrawAmount);
router.post('/verify-payment', moneyController_1.verifyPayment);
router.post('/reject-payment', moneyController_1.rejectPayment);
router.post('/verify-kyc', ProfileManager_1.verifyKyc);
router.post('/reject-kyc', ProfileManager_1.rejectKyc);
router.get('/notifications', notifyController_1.getNotifications);
router.post('/new-Profile', ProfileManager_1.createProfile);
router.post('/update-Profile', ProfileManager_1.updateProfile);
router.post('/update-Amount', ProfileManager_1.updateAmount);
router.post('/battles/create', battleManger_1.createBattle);
router.post('/battles/join', battleManger_1.joinBattle);
router.get('/battles/pending', battleManger_1.pendingBattle);
router.get('/battles/inBattle', battleManger_1.inProgressBattle);
router.get('/battles/runningBattle', battleManger_1.runningBattle);
router.post('/battles/:id/complete', battleManger_1.completeBattle);
router.post('/battles/inBattle/uploads', multerService_1.upload.single('image'), battleManger_1.uploadScreenShot);
router.post('/battles/inBattle/canceled', battleManger_1.canceledBattle);
router.get('/battles/battleHistory', battleManger_1.battleHistory);
router.get('/battles', battleManger_1.showBattles);
router.post('/deleteBattle', battleManger_1.deleteBattle);
router.get('/getProfiles', ProfileManager_1.getProfile);
router.get('/findProfile', ProfileManager_1.findProfile);
router.post('/blockPlayer', ProfileManager_1.blockedPlayer);
router.get('/blockedOnes', ProfileManager_1.getBlockedOnes);
router.post('/unblockPlayer', ProfileManager_1.unBlockPlayer);
router.post('/createState', stateManager_1.createState);
router.post('/kyc', multerService_1.upload.single('image'), ProfileManager_1.completeKYC);
router.get('/transaction', moneyController_1.getTransaction);
router.get('/allTransaction', moneyController_1.AllTransaction);
router.get('/reqTransaction', moneyController_1.ReqTransaction);
router.get('/findTransaction', moneyController_1.findTransaction);
router.post('/depositProof', multerService_1.upload.single("image"), moneyController_1.paymentProof);
