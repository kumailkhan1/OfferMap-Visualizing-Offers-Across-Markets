import axios from 'axios';

export async function getAllOffers(skip,take) {

    try {
        const offers = await axios.get(`/offerings/${skip}&${take}`);
        console.log('response  ', offers)
        return offers.data;
    } catch (err) {
        return [];
    }
}