export default async function checkExpiration(domain, body) {
    return `${domain} expires on ${body.WhoisRecord.expiresDate}`
}