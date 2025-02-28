import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/UserContext";
import { API_URL } from "../utils/url";
import { socket } from "./homePage";

export const BettingCard = (props : any)=>{
    const navigate = useNavigate();
    const { setOpponentFound, opponentFound, userId } = useUserContext();

    const { setBattleId, name } = useUserContext();

    const joinBattle = async()=>{
        
        if(userId === props.battle.player1){
            if(!opponentFound){
                return console.log("Opponent not found!");
            }
            return console.log("batlle created joined");
        }
        try{

           const respose = await axios.post(`${API_URL}/api/auth/battles/join`, {
                name ,
                userId ,
                battleId : props.battle._id
            });

            console.log(respose.data);
            navigate('/battle');
        }
        catch(err){
            console.log("Error :" + err);
        }
    }
    const deleteBattle = () => {
        socket.emit("deleteBattle", props.battle._id);
        console.log("Battleid: "+ props.battle._id);
      };

    return ( 
        <div>
    <div className="border-black bg-white rounded-t-md mx-2 my-1 p-2 text-sm">
       <div>Challenge from {props.battle.player1Name}</div>
    </div>
    <div className="border-black bg-white rounded-b-md mx-2 p-2 text-sm flex justify-between">
       <div className="flex gap-10">
        <div className="flex flex-col gap-1">
            <div className="font-serif text-purple-500">ENTRY</div>
            <div className="flex gap-2">
        <img src="../../cash.png" alt="" className="size-6"/>
         <div className="font-bold text-xs">{props.battle.amount}</div>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <div className="font-serif text-purple-500">PRICE</div>
            <div className="flex gap-2">
        <img src="../../cash.png" alt="" className="size-6"/>
         <div className="font-bold text-xs">{props.battle.prize}</div>
            </div>
        </div>
       </div>
       <div className="flex gap-3">
       
       {userId === props.battle.player1 ?
       <><button className={`text-center font-mono  text-white py-2 px-4 text-xs rounded-md ${!opponentFound ? "bg-purple-700" : "bg-gray-500"}`} onClick={() => {
                            joinBattle();
                            setBattleId(props.battle._id);
                            setOpponentFound(true);
                        } }>{!opponentFound ? "play" : "Waiting"}</button><button className="text-center font-mono bg-red-600 text-white py-2 px-4 text-xs rounded-md" onClick={() => {
                            deleteBattle();
                            setBattleId(props.battle._id);
                        } }>Delete</button></> : <button className={`text-center font-mono  text-white py-2 px-4 text-xs rounded-md bg-purple-700`} onClick={() => {
                            joinBattle();
                            setBattleId(props.battle._id);
                            setOpponentFound(true);
                        } }>play</button>}
       </div>
    </div>
        </div>
    )
}