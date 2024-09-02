import checkAvailability from './utils/checkAvailability.js';
import checkDomainLink from './utils/checkDomainLink.js';
import checkExpiration from './utils/checkExpiration.js';
import getRegistrantDetails from './utils/getRegistrantDetails.js';
import getResponseBody from './utils/getResponseBody.js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
    let body = await getResponseBody(process.env.DOMAIN);
    // console.log(await getResponseBody(process.env.DOMAIN));

     console.log(await checkExpiration(process.env.DOMAIN, body));

    // console.log(await checkAvailability(process.env.DOMAIN, body));

    // checkDomainLink(`http://${process.env.DOMAIN}`)
    // .then(isWorking => {
    //     if (isWorking) {
    //         console.log("The link works!");
    //     } else {
    //         console.log("The link is broken.");
    //     }
    // });

    //console.log(await getRegistrantDetails(process.env.DOMAIN, body));
}

main();