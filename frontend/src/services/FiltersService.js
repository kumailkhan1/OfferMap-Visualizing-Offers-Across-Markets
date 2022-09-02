import axios from 'axios';

export async function getFilters() {

    try {
        const gametypes = await axios.get('/gametype');
        const countries = await axios.get('/markets');
        const companies = await axios.get('/bookies')
        console.log({ gametypes: gametypes.data.gametypes, countries: countries.data.markets, companies: companies.data.bookies })
        return { gametypes: gametypes.data.gametypes, countries: countries.data.markets, companies: companies.data.bookies };
    } catch (err) {
        return [];
    }
}