import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    PieSeries,
    Tooltip,
    Title,
    Legend
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
        <Grid item xs={12} md={6}>
            <Chart
                data={bookies}
            >

                <PieSeries
                    valueField="count"
                    argumentField="gametype_id"
                />
                <Legend position='top' />
                <Title
                    text="Offers by Gametypes"
                />
                <EventTracker />
                <Tooltip />
                <HoverState hover={hover} onHoverChange={changeHover} />

                <Stack />
            </Chart>
        </Grid>
    );
}
export default PieChart;
