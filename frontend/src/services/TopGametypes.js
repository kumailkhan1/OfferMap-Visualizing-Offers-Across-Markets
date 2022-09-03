import axios from 'axios';

export async function getTopGametypes() {

    try {
        const topGameTypes = await axios.get(`/gametype/top`);
        console.log('Bookies  ', topGameTypes.data)
        let { topGameTypes: chartData } = topGameTypes.data;
        return chartData;
    } catch (err) {
        return [];
    }
}