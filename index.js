import unirest from 'unirest';
import dotenv from 'dotenv';
dotenv.config();

let responseBody;

async function setResponseBody(domain) {
    unirest.get('https://jsonwhois.com/api/v1/whois')
 .headers({
    'Accept': 'application/json',
    'Authorization': `Token token=${process.env.JSON_API_KEY}`
 })

   .query({
      "domain": domain
       })

   .end(function (response) {
        responseBody = response.body;
});
}

async function checkExpiration(domain) {
    await setResponseBody(domain);
    console.log(responseBody);
}

checkExpiration('google.com');