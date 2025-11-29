import axios from "axios"
import { useEffect, useState } from "react"

function SeatTable(){

    const [seats,setSeats]=useState([]);
    
    useEffect(()=>{
        async function fetchSeats(){
            try{
                const response=await axios.get("https://viaje.ai/seatinfo_api/");
                setSeats(response.data.data);
            }catch(error){
                console.error("Error fetching seats:",error);
            }
        }
        fetchSeats();
    },[])

    return(
        <div className="w-full max-w-lg bg-white shadow-lg overflow-hidden">
            <table className="w-full text-center border-collapse">
                <thead className="bg-indigo-200">
                    <tr>
                        <th className="p-3 border border-indigo-300 text-gray-700 font-bold">SEAT</th>
                        <th className="p-3 border border-indigo-300 text-gray-700 font-bold">PRICE</th>
                        <th className="p-3 border border-indigo-300 text-gray-700 font-bold">STATUS</th>
                    </tr>    
                </thead>
                <tbody>
                    {seats.map((item,index)=>(
                        <tr key={index} className="border border-indigo-200">
                            <td className="p-3 border border-indigo-200 font-bold">{item.seat_no}</td>
                            <td className="p-3 border border-indigo-200 font-bold">{item.price}</td>
                            <td className="p-3 border border-indigo-200 font-bold">{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SeatTable

