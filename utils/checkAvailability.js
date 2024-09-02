export default async function checkAvailability(domain, body) {
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