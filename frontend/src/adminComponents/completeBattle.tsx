import { StickyTable } from "../utils/completeBTable"


 export const CompleteBattle = ()=>{
    return (
         <div className="max-w-sm bg-gray-200 min-h-screen pb-4 pt-20 px-4">
            <div className="text-3xl font-serif">Battles</div>
            <div className="bg-white  rounded-md shadow-md pb-4">
                <div className="bg-gray-100 rounded-t-md">
                    <div className=" font-semibold my-4 py-3 px-4 text-blue-700 border-b-2">Completed Battles</div>
                </div>
                <div className="px-1 pb-10">
               <StickyTable />
                </div>

            </div>
         </div>
    )
 }