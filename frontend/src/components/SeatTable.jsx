import axios from "axios"
import { useEffect, useState } from "react"

function SeatTable(){

    const [seats,setSeats]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchSeats(){
            try{
                setLoading(true);
                setError(null);
                const response=await axios.get("https://viaje.ai/seatinfo_api/");
                if (response?.data?.data && Array.isArray(response.data.data)) {
                  setSeats(response.data.data);
                } else {
                throw new Error("Invalid API response format");
            }
            }catch(error){
                console.error("Error fetching seats:",error);
                setError("Failed to load seat data.");
            } finally {
                setLoading(false);
            }
        }
        fetchSeats();
    },[])

    if (loading) {
        return <div>Loading seat data...</div>;
    }

    if (error) {
    return <div className="w-full max-w-4xl mx-auto">
      <div className="w-full bg-white shadow-xl rounded-xl p-3 sm:p-5 md:p-8 overflow-x-auto">
    <p>{error}</p>
      </div>
    </div>;
  }


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

