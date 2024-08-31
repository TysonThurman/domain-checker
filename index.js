import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
    // console.log(await checkExpiration(process.env.DOMAIN));

    // console.log(await checkAvailability(process.env.DOMAIN));

    // checkDomainLink(`http://${process.env.DOMAIN}`)
    // .then(isWorking => {
    //     if (isWorking) {
    //         console.log("The link works!");
    //     } else {
    //         console.log("The link is broken.");
    //     }
    // });
}

async function getResponseBody(domain) {
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.API_KEY}&domainName=${domain}&outputFormat=JSON`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    } 
}

async function checkExpiration(domain) {
    let body = await getResponseBody(domain);
    return `${domain} expires on ${body.WhoisRecord.expiresDate}`
}

async function checkAvailability(domain) {
    let body = await getResponseBody(domain);
    let today = new Date();
    let expireDate = body.WhoisRecord.expiresDate;
    let parsedExpireDate = new Date(expireDate);

    let isExpired = parsedExpireDate.getTime() < today.getTime();
    let expiresToday = parsedExpireDate.getTime() === today.getTime();

    if (isExpired) {
        if (expiresToday) {
            return `The domain name "${domain}" expires today and should become available very soon unless renewed by the owner.`;
        } else {
            return `The domain name "${domain}" expired on ${parsedExpireDate} and should be available.`;
        }
    } else {
        return `The domain name "${domain}" is in use and not available until ${parsedExpireDate}.`;
    }
}

async function checkDomainLink(domain) {
    try {
        const response = await fetch(domain);
        if (response.ok) {
            console.log(`The URL "${domain}" is working.`);
            return true;
        } else {
            console.log(`The URL "${domain}" returned a status code: ${response.status}.`);
            return false;
        }
    } catch (error) {
        console.error(`The URL "${domain}" is not working. Error: ${error.message}`);
        return false;
    }
}

main();