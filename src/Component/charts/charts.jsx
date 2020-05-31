import React, { useState, useEffect } from 'react';
import { Fetchdailydata } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import './charts.css'

const Chart = ({data:{confirmed={},recovered={},deaths={}}={},country}) => {
    const [fetchd, setfetchd] = useState({});

    useEffect(() => {
        const fetchapi = async () => {
            setfetchd(await Fetchdailydata());
        }
        fetchapi();
        


    },[]);


    const Linechart = (
        fetchd.length ?
        <Line
            data={{
                labels: fetchd.map(( dat ) => dat.date),
                datasets: [{
                    data: fetchd.map(( dat ) => dat.confirmed)
                    , label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: fetchd.map(( dat ) => dat.deaths)
                    , label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }}


        /> : null
    )
    //console.log(confirmed.value);

    const Barchart = (
        confirmed
        ?
        <Bar
        data={{
            labels: ['Infected','Recovered','Deaths']
            ,datasets: [{
                label: 'People',
                backgroundColor: ['#d4e7ff','#7CEC9F','#f8adaa']
                ,data: [confirmed.value,recovered.value,deaths.value]
            }]

        }}
        options={{
            legend: {display: false},
            title: {display: true, text: `Current State in ${country}`}
            
        }}
        /> : null

    );


    return (<div className='chart'>
        { country ? Barchart : Linechart}
        </div>);
}

export default Chart;