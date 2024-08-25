// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
//     const { round, index } = params;
    
//     // url decode round
//     const decodedRound = decodeURIComponent(round);

//     // b64 decode round
//     const b64DecodedRound = Buffer.from(decodedRound, 'base64').toString('utf-8');

//     // load into json object
//     const roundData = JSON.parse(b64DecodedRound);

// 	error(404, 'Not found');
// }