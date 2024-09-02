export default async function getRegistrantDetails(domain, body) {
    return `The domain "${domain}" is registered by ${body.WhoisRecord.registrant.name}.`;
}