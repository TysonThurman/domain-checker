import dotenv from 'dotenv';
dotenv.config();

//https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_dpGGF5GgcPiLTV8FRAxmniBu7ANm1&domainName=google.com&outputFormat=JSON

async function getResponseBody(domain) {
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.API_KEY}&domainName=${domain}&outputFormat=JSON`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
    //   console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    } 
}

async function checkExpiration(domain) {
    let body = await getResponseBody(domain);
    console.log(body);
}

checkExpiration(process.env.DOMAIN); //get the expiration date
// getResponseBody(process.env.DOMAIN); //test the response function