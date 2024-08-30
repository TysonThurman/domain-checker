import dotenv from 'dotenv';
dotenv.config();

async function main() {
    console.log(await checkExpiration(process.env.DOMAIN));
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
    // console.log(`${domain} expires on ${body.WhoisRecord.expiresDate}`);
    return `${domain} expires on ${body.WhoisRecord.expiresDate}`
}

main();