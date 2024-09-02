export default async function checkDomainLink(domain) {
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