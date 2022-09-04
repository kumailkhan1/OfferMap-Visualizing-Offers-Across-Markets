import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Tooltip,
    Title,
    Legend
} from '@devexpress/dx-react-chart-material-ui';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import { getTopBookies } from '../../services/TopBookies';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const BarChart = () => {
    const [bookies, setBookies] = useState([]);
    const [hover, setHover] = useState(undefined)

    const changeHover = (hover) => {
        setHover(hover)
    }

    useEffect(() => {
        async function fetchData() {
            let chartData = await getTopBookies();
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
                <ArgumentScale factory={scaleBand} />
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                    valueField="count"
                    argumentField="bookies_name"
                    name="No. of Offers"
                />
                <Legend position='top' />
                <Title
                    text="Top 5 Companies"
                />

                <EventTracker />
                <Tooltip />
                <HoverState hover={hover} onHoverChange={changeHover} />

                <Stack />
            </Chart>
        </Grid>
    );
}
export default BarChart;
