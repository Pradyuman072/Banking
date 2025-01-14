"use client"
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2"
ChartJS.register(ArcElement,Tooltip,Legend)
function DonutChart({accounts}:DoughnutChartProps) {
    const data={datasets:[{
        label:'Banks',
        data:[1235,2123,12313],
        backgroundColor:['#0747b6','#2265d8','#2f91fa']
    }],
labels:['Bank1','Bank2','Bank3']}
  return (
   <Doughnut data={data}
   options={{
    cutout:"60%",
    plugins:{
        legend:{
            display:false
        }
    }
   }}
   />
  )
}

export default DonutChart
