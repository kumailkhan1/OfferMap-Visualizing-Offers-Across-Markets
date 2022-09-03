import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    PieSeries,
    Tooltip,
    Title
} from '@devexpress/dx-react-chart-material-ui';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import { getTopGametypes } from '../../services/TopGametypes';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const PieChart = () => {
    const [bookies, setBookies] = useState([]);
    const [hover, setHover] = useState(undefined)

    const changeHover = (hover) => {
        setHover(hover)
    }

    useEffect(() => {
        async function fetchData() {
            let chartData = await getTopGametypes();
            if (chartData) {
                console.log(chartData);
                setBookies(chartData)
            }
        }
        fetchData();
    }, [])
    // console.log(bookies);
    return (
        <Paper elevation={3} sx={{ width: '50%', mt: 2 }}>
            <Chart
                data={bookies}
            >

                <PieSeries
                    valueField="count"
                    argumentField="gametype_id"
                />
                <Title
                    text="Offers by Gametypes"
                />
                <EventTracker />
                <Tooltip />
                <HoverState hover={hover} onHoverChange={changeHover} />

                <Stack />
            </Chart>
        </Paper>
    );
}
export default PieChart;
