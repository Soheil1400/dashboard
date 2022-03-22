import {Line} from 'react-chartjs-2'
import {Filler} from "chart.js";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import {useState} from "react";
import {theme} from "../../theme/theme";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            display: false
        },
        x: {
            display: false
        }
    }
};

const Chart = ({arr}) => {
    const [data, setData] = useState({
        labels: ['', '', '', '', '',],
        datasets: [
            {
                label: 'data',
                data: arr,
                borderColor: theme.palette.secondary.main,
                backgroundColor: theme.palette.secondary.light,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: theme.palette.secondary.main,
                borderWidth: 1
            },
        ],
    });
    return (
        <>
            <Line data={data} options={options}/>
        </>
    )
}

export default Chart