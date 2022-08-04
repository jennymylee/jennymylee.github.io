import * as React from "react";
import "./Graph.css";
import { Line } from "react-chartjs-2"
import {Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from "chart.js"
ChartJs.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

/*
This component is being rendered inside Product detail page.
It is passed down the data of history list for a specific sneaker
and then is being displayed in a line graph. Stretch feature
*/
export default function Graph(props){
    return (
        <div className="graph-container">
                <Line className="graph" data={
                    {
                        labels: ["Sep '21", "Oct '21", "Nov '21", "Dec '21", "Jan '22", "Feb '22", "Mar '22", "Apr '22", "May '22", "Jun '22", "Jul '22", "Aug '22"],
                        datasets: [
                            {
                                label: props.name,
                                data: props.history,
                                backgroundColor: "#ab5cd63d",
                                fill: true,
                                pointBorderColor: "white",
                                pointBorderWidth: 1.5,
                                borderColor: "#AB5CD6"
                                // borderColor: "purple"
                            }
                        ]
                    }
                } options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: "white",
                                font: {
                                    size: 15,
                                    family: "Poppins",
                                    style: "normal",
                                    weight: "700",
                                    lineHeight: 22,
                                    
                                }
                            }
                        }
                    },
                    scales:{
                        y: {
                            grid: {
                                color: "white"
                            },
                            beginAtZero: true,
                            ticks: {
                                callback: function(value, index, values){
                                    return "$" + value
                                },
                                color: "white",
                                font: {
                                    size: 15,
                                    family: "Poppins",
                                    weight: 700,
                                },
                            }
                        },
                        x:{
                            grid: {
                                color: "white"
                            },
                            ticks:{
                                color: "white",
                                font: {
                                    size: 15,
                                    family: "Poppins",
                                    weight: 700,
                                }
                            }
                        }
                    }
                }}></Line>
        </div>
    )
}