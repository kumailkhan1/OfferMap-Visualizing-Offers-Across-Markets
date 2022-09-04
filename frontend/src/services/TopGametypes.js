import axios from 'axios';

export async function getTopGametypes() {

    try {
        const topGames = await axios.get(`/gametype/top`);
        console.log('Bookies  ', topGames.data)
        let { topGames: chartData } = topGames.data;
        return chartData;
    } catch (err) {
        return [];
    }
}