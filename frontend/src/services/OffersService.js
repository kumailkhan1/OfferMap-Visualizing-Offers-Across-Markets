import axios from 'axios';

export async function getAllOffers(skip, take, filterby) {

    try {
        const offers = await axios.post(`/offerings`, {
            skip: skip,
            take: take,
            filterby: filterby
        });
        console.log('response  ', offers)
        return offers.data;
    } catch (err) {
        return [];
    }
}