import { Router } from 'express';
import { sendOtp, verifyOtp } from '../controllers/authController';
import { AllTransaction, depositAmount, findTransaction, getTransaction, paymentProof, rejectPayment, ReqTransaction, verifyPayment, withdrawAmount } from '../controllers/moneyController';
import { getNotifications } from '../controllers/notifyController';
import { blockedPlayer, completeKYC, createProfile, findProfile, getBlockedOnes, getProfile, rejectKyc, unBlockPlayer, updateAmount, updateProfile, verifyKyc } from '../controllers/ProfileManager';
import { battleHistory, canceledBattle, completeBattle, createBattle, deleteBattle, inProgressBattle, joinBattle, pendingBattle, runningBattle, showBattles, uploadScreenShot } from '../controllers/battleManger';
import {io} from '../app';
import express from "express";
import path from 'path';
import { upload } from '../utils/multerService';
import { createState } from '../controllers/stateManager';
import { Socket } from 'socket.io';

const router = Router();
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/deposit',upload.single('image'), depositAmount);
router.post('/withdraw', withdrawAmount);
router.post('/verify-payment', verifyPayment);
router.post('/reject-payment',  rejectPayment);
router.post('/verify-kyc', verifyKyc);
router.post('/reject-kyc',  rejectKyc);
router.get('/notifications', getNotifications);
router.post('/new-Profile', createProfile);
router.post('/update-Profile', updateProfile);
router.post('/update-Amount', updateAmount);
router.post('/battles/create', createBattle);
router.post('/battles/join', joinBattle);
router.get('/battles/pending', pendingBattle);
router.get('/battles/inBattle', inProgressBattle);
router.get('/battles/runningBattle', runningBattle);
router.post('/battles/:id/complete', completeBattle);
router.post('/battles/inBattle/uploads',upload.single('image'), uploadScreenShot);
router.post('/battles/inBattle/canceled', canceledBattle);
router.get('/battles/battleHistory', battleHistory);
router.get('/battles', showBattles);
router.post('/deleteBattle', deleteBattle);
router.get('/getProfiles', getProfile);
router.get('/findProfile', findProfile);
router.post('/blockPlayer', blockedPlayer);
router.get('/blockedOnes', getBlockedOnes);
router.post('/unblockPlayer', unBlockPlayer);
router.post('/createState', createState);
router.post('/kyc',upload.single('image'), completeKYC);
router.get('/transaction', getTransaction);
router.get('/allTransaction', AllTransaction);
router.get('/reqTransaction', ReqTransaction);
router.get('/findTransaction', findTransaction);
router.post('/depositProof', upload.single("image"), paymentProof);

 

export  { router , io};
