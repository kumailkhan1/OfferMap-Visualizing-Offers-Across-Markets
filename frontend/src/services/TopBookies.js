import axios from 'axios';

export async function getTopBookies() {

    try {
        const topBookies = await axios.get(`/bookies/top`);
        console.log('Bookies  ', topBookies.data)
        let { topBookies: chartData } = topBookies.data;
        return chartData;
    } catch (err) {
        return [];
    }
}