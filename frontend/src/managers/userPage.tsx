import {  useState } from "react";
import { Header } from "../components/header";
import { Route, Routes} from "react-router-dom";
import { Footer } from "../components/footer";
import { HomePage } from "../components/homePage";
import { ProfilePage } from "../components/profilePage";
import { WalletPage } from "../components/walletPage";
import { HistoryPage } from "../components/historyPage";
import { LoginPage } from "../components/loginPage";
import { DepositPage } from "../components/depositPage";
import { WithdrawPage } from "../components/withdrawPage";
import { WithdrawToBank } from "../components/withdrawToBank";
import { WithdrawToUPI } from "../components/withdrawToUPI";
import { SupportPage } from "../components/supportPage";
import { BattlePage } from "../components/battlePage";
import { RulesPgage } from "../components/rulesPage";
import { GameHistory } from "../components/GameHistory";
import { AdminPage } from "./adminPage";
import { DashBoard } from "../adminComponents/dashBoard";
import { AllPlayers } from "../adminComponents/allPlayers";
import { WinCashPage } from "../components/winCashPage";
import { useUserContext } from "../hooks/UserContext";
import { TransactionHistory } from "../adminComponents/transaction";
import { BlockedPlayer } from "../adminComponents/blockedPlayers";
import { PendingBattle } from "../adminComponents/pendingBattle";
import { RunningBattle } from "../adminComponents/runningBattle";
import { CompleteBattle } from "../adminComponents/completeBattle";
import { DisputeBattle } from "../adminComponents/disputeBattle";
import { BattleResult } from "../adminComponents/viewResult";
import { DisputeResult } from "../adminComponents/dispute";
import { AllPayments } from "../adminComponents/allPayments";
import { ReqPayments } from "../adminComponents/reqPayments";
import { PaymentRequest } from "../adminComponents/paymentReq";
import { RechargeUser } from "../adminComponents/rechargeUser";
import { MoneyRecharge } from "../adminComponents/moneyRecharge";
import { PendingKyc } from "../adminComponents/pendingKyc";
import { KycVerification } from "../adminComponents/kycVerify";
import { VerifiedKyc } from "../adminComponents/verifiedKyc";


export const UserPage = ()=>{

    //   const { login  } = useUserContext();
      const [ name , ] =useState("");
    //   const navigate = useNavigate();

      const { adminClicked } = useUserContext();

      // useEffect(()=>{
      //   if(login === true){
      //     navigate('/winCash')
      //   }
      // },[login])

  
    return (
        <div>
            { !adminClicked && <Header ></Header>}
       <Routes>
            <Route path="/home" element={<HomePage name={name}/>}></Route>
           <Route path="/profile" element={<ProfilePage  />}></Route>
           <Route path="/wallet" element={<WalletPage/>}></Route>
           <Route path="/history" element={<HistoryPage/>}></Route>
           <Route path="/" element={<LoginPage />}></Route>
           <Route path="/deposit" element={<DepositPage    />}></Route>
           <Route path="/withdraw" element={<WithdrawPage />}></Route>
           <Route path="/withdrawToBank" element={<WithdrawToBank  />}></Route>
           <Route path="/withdrawToUPI" element={<WithdrawToUPI  />}></Route>
           <Route path="/support" element={<SupportPage/>}></Route>
           <Route path="/battle" element={<BattlePage  />}></Route>
           <Route path="/rules" element={<RulesPgage/>}></Route>
           <Route path="/gameHistory" element={<GameHistory />}></Route>
           <Route path="/winCash" element={<WinCashPage/>}></Route>
           <Route path="/admin" element={<AdminPage />}>
                  <Route index element={<DashBoard />}></Route>
                  <Route path="allPlayers" element={<AllPlayers />}></Route>
                  <Route path="allPlayers/transaction" element={<TransactionHistory />}></Route>
                  <Route path="blocked" element={<BlockedPlayer />}></Route>
                  <Route path="pendingBattle" element={<PendingBattle />}></Route>
                  <Route path="runningBattle" element={<RunningBattle />}></Route>
                  <Route path="completeBattle" element={<CompleteBattle />}></Route>
                  <Route path="disputeBattle" element={<DisputeBattle />}></Route>
                  <Route path="viewResult" element={<BattleResult />}></Route>
                  <Route path="disputeResult" element={<DisputeResult />}></Route>
                  <Route path="allPayments" element={<AllPayments />}></Route>
                  <Route path="reqPayments" element={<ReqPayments />}></Route>
                  <Route path="paymentReq" element={<PaymentRequest />}></Route>
                  <Route path="rechargeUser" element={<RechargeUser />}></Route>
                  <Route path="addMoney" element={<MoneyRecharge />}></Route>
                  <Route path="pendingKyc" element={<PendingKyc />}></Route>
                  <Route path="verifiedKyc" element={<VerifiedKyc />}></Route>
                  <Route path="pendingKyc/kycView" element={<KycVerification />}></Route>
           </Route>
       </Routes>
     { !adminClicked && <Footer></Footer> }
        </div>
    )
}