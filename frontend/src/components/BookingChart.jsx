import axios from "axios";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function BookingChart() {
  const [dates, setDates] = useState([]);
  const [via, setVia] = useState([]);
  const [main, setMain] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGraphData() {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("https://viaje.ai/mainvia_api/");
        const data = response.data.data;

        setDates(data.map((item) => item["0"]));
        setVia(data.map((item) => item["1"]));
        setMain(data.map((item) => item["2"]));
      } catch (error) {
        console.error("Error fetching graph data:", error);
        setError("Failed to load graph data.");
      } finally {
        setLoading(false);
      }
    }
    fetchGraphData();
  }, []);
   
  if (loading) {
    return <div>Loading chart...</div>;
  }
  
  if (error) {
    return <div className="w-full max-w-4xl mx-auto">
      <div className="w-full bg-white shadow-xl rounded-xl p-3 sm:p-5 md:p-8 overflow-x-auto">
    <p>{error}</p>
      </div>
    </div>;
  }

  const options = {
    title: { text: "Via vs Main Booking" },
    chart: { type: "column" },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemMarginTop: 10,

      // RESPONSIVE FIX:
      floating: false,
    },

    xAxis: {
      categories: dates,
      title: { text: "Date" },
    },

    yAxis: {
      title: { text: "Bookings" },
    },

    series: [
      { name: "Via", data: via, color: "#c7d2fe" },
      { name: "Main", data: main, color: "#6b7280" },
    ],

    // ⚡ Highcharts built-in responsiveness
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600, // Mobile
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="w-full bg-white shadow-xl rounded-xl p-3 sm:p-5 md:p-8 overflow-x-auto">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default BookingChart;
